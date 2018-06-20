/*
* @author: Leandro Henrique Reis <henrique@henriquereis.com>
* @date:   2016-05-29 19:43:41
* @last modified by:   Leandro Henrique Reis
* @last modified time: 2016-07-08 06:14:17
*/

'use strict';

angular.module('ruptZero',[
    'OrderService',
    'PaginatorData',
    'ckeditor'
]);
/*
* @author: Leandro Henrique Reis <henrique@henriquereis.com>
* @date:   2016-05-18 10:34:27
* @last modified by:   Leandro Henrique Reis
* @last modified time: 2016-07-03 10:08:36
*/
angular.module('OrderService', []).service('OrderService', [
    function() {
        var order = {};
        return {
            get: function(modulo, item) {
                if (order[modulo] == undefined) {
                    order[modulo] = {};
                }

                if (order[modulo][item] == undefined) {
                    order[modulo][item] = -1;
                }

                order[modulo][item] += 1;

                if (order[modulo][item] === 2) {
                    delete order[modulo][item];

                    return getOrder(order[modulo]);
                }

                return getOrder(order[modulo]);
            },
            byOrder: function(modulo, item) {
                if (order[modulo] == undefined) {
                    return 'random';
                }

                if (order[modulo][item] == undefined) {
                    return 'random';
                }

                if (order[modulo][item] === 0) {
                    return 'asc';
                }

                return 'desc';
            }
        };

        function getOrder(modulo) {
            var order = [];
            for (var key in modulo) {
                if (modulo.hasOwnProperty(key)) {
                    if (modulo[key] === 1) {
                        order.push('-' + key);
                    } else {
                        order.push(key);
                    }
                }
            }
            return order;
        }
    }
]);

/*
* @author: Leandro Henrique Reis <henrique@henriquereis.com>
* @date:   2016-05-29 19:37:24
* @last modified by:   Leandro Henrique Reis
* @last modified time: 2016-09-01 10:02:25
*/

'use strict';

angular.module('ruptZero')
.controller('PostController', ['$scope', '$http', '$filter', 'Paginator', 'OrderService', 
    function($scope, $http, $filter, Paginator, OrderService){

// Editor options.
  $scope.options = {
    language: 'en',
    allowedContent: true,
    entities: false
  };

  // Called when the editor is completely ready.
  $scope.onReady = function () {
    // ...
  };
  
        $scope.pagination= {
            perPage: 20,
            currentPage: 1,
            totalPages: 0,
            totalItems: 0,
            currentItem: 0,
            totalCurrentPage: 0, 
            pageNumbers: []
        };

        $scope.post={};
        var posts={
            all: [],
            filtered: [],
            list: [],
            paginated: []
        };

        $scope.posts=[];


        $scope.save=function(post)
        {
            console.log(post);
            $http.post('/admin/post', post).then(function(response) {
                flash.success('Artigo salvo com sucesso');
                location.href='/admin/post/'+response.data.id+'/edit';
            }, function(response){
                if (response.data.slug!=undefined && ($scope.post.slug==undefined || $scope.post.slug=="")) {
                    getSlug();
                }
                showErrors(response.data);
            });
        }

        var getSlug=function()
        {
            $http.post('/slug', {'slug': $scope.post.title}).then(function(response) {
                $scope.post.slug=response.data;
            });
        }

        $scope.update=function(post, id)
        {
            $http.put('/admin/post/'+id, post).then(function(response) {
                flash.success('Artigo atualizado com sucesso');
                $scope.post=response.data;
            }, function(response){
                if (response.data.slug!=undefined && ($scope.post.slug==undefined || $scope.post.slug=="")) {
                    getSlug();
                }
                showErrors(response.data);
            });
        }

        $scope.forceDelete=function(post)
        {
            flash.confirm(function() {
                $http.delete('/admin/trashed/post/'+post.id).then(function(response) {
                    var index=posts.all.indexOf(post);
                    posts.all.splice(index, 1);
                    var currentPage=$scope.pagination.currentPage;

                    var page=Paginator.setPaginationData(posts.all, posts.filtered, $scope.pagination)
                    $scope.pagination=page.pagination;
                    posts=page.entity;
                    $scope.posts=posts.list;
                    $scope.setPage(currentPage);

                    flash.success('Artigo excluído com sucesso');
                }, function(response) {
                    setTimeout(function() {
                        flash.error('Artigo não pode ser apagado, verifique as relações, você precisa apagar todas antes.');
                    }, 100);
                });
            }, 'Excluir artigo: ' + post.name, 'Exclusão!', 'Sim, continuar', 'Cancelar');
        }

        $scope.restore=function(post)
        {
            flash.confirm(function() {
                $http.put('/admin/restore/post/'+post.id).then(function(response) {
                    flash.success('Artigo desativado com sucesso');
                    location.href='/admin/post';
                }, function(response) {
                    setTimeout(function() {
                        showErrors(response.data);
                    }, 100);
                });
            }, 'Reativar artigo: ' + post.title, 'Ativar!', 'Sim, continuar', 'Cancelar');
        }

        $scope.all=function()
        {
            $http.get('/admin/post/all').then(function(response) {
                var data=response.data;
                data=prepareUsers(data);
                var page=Paginator.setPaginationData(data, data, $scope.pagination)
                $scope.pagination=page.pagination;
                posts=page.entity;
                posts.allCopy=posts.all;
                $scope.posts=posts.list;
            }, function(response) {
                showErrors(response.data);
            });
        }

        $scope.delete=function(post)
        {
            flash.confirm(function() {
                $http.delete('/admin/post/'+post.id).then(function(response) {
                    var index=posts.all.indexOf(post);
                    posts.all.splice(index, 1);
                    var currentPage=$scope.pagination.currentPage;

                    var page=Paginator.setPaginationData(posts.all, posts.filtered, $scope.pagination)
                    $scope.pagination=page.pagination;
                    posts=page.entity;
                    $scope.posts=posts.list;
                    $scope.setPage(currentPage);

                    flash.success('Artigo excluído com sucesso');
                    location.href='/admin/post';
                }, function(response) {
                    setTimeout(function() {
                        showErrors(response.data);
                    }, 100);
                });
            }, 'Continuar na exclusão de: ' + post.title, 'Exclusão!', 'Sim, continuar', 'Cancelar');
        }

        $scope.all=function()
        {
            $http.get('/admin/post/all').then(function(response) {
                var data=response.data;
                data=preparePosts(data);
                var page=Paginator.setPaginationData(data, data, $scope.pagination)
                $scope.pagination=page.pagination;
                posts=page.entity;
                $scope.posts=posts.list;
            }, function(response) {
                showErrors(response.data);
            });
        }

        $scope.setPage=function(page)
        {
            var data=Paginator.page(posts, page, $scope.pagination);
            $scope.pagination=data.pagination;
            $scope.posts=data.entity.list;
        }
        
        $scope.previous=function()
        {
            $scope.setPage($scope.pagination.currentPage-1);
        }
        $scope.next=function()
        {
            $scope.setPage($scope.pagination.currentPage+1);
        }

        var preparePosts=function(data)
        {
            for (var i = data.length - 1; i >= 0; i--) {
                data[i].updated=moment(data[i].updated_at).format('DD/MM/YYYY hh:mm');
            }

            return data;
        }

        $scope.doFilter= function(search)
        {
                var filtered = $filter('filter')(posts.all, search);
                var page=Paginator.setPaginationData(posts.all, filtered, $scope.pagination)
                $scope.pagination=page.pagination;
                posts=page.entity;
                $scope.posts=posts.list;
                $scope.setPage(1);
        };

        /**
         * Ordena objetos
         */
        $scope.order = function(property) {
            var postsOrder = OrderService.get('posts', property);

            posts.all=$filter('orderBy')(posts.all, postsOrder);
            posts.filtered=$filter('orderBy')(posts.filtered, postsOrder);
            console.log(posts.filtered);
            console.log(postsOrder);
            var page=Paginator.setPaginationData(posts.all, posts.filtered, $scope.pagination)
            $scope.pagination=page.pagination;
            posts=page.entity;
            $scope.posts=posts.list;
            $scope.setPage(1);
        };

        /**
         * Ordem que está ordenado a propriedade
         */
        $scope.byOrder = function(property) {
            return OrderService.byOrder('posts', property);
        };
}]);
/*
* @author: Leandro Henrique Reis <henrique@henriquereis.com>
* @date:   2016-05-29 19:37:24
* @last modified by:   Leandro Henrique Reis
* @last modified time: 2016-07-29 21:49:33
*/

'use strict';

angular.module('ruptZero')
.controller('UserController', ['$scope', '$http', '$filter', 'Paginator', 'OrderService', 
    function($scope, $http, $filter, Paginator, OrderService){
        $scope.pagination= {
            perPage: 20,
            currentPage: 1,
            totalPages: 0,
            totalItems: 0,
            currentItem: 0,
            totalCurrentPage: 0, 
            pageNumbers: []
        };

        $scope.user={};
        var users={
            all: [],
            filtered: [],
            list: [],
            paginated: []
        };

        $scope.users=[];

        $scope.save=function(user)
        {
            $http.post('/admin/user', user).then(function(response) {
                flash.success('Usuário salvo com sucesso');
                $scope.user={};
            }, function(response){
                showErrors(response.data);
            });
        }

        $scope.update=function(user, id)
        {
            $http.put('/admin/user/'+id, user).then(function(response) {
                flash.success('Usuário atualizado com sucesso');
                $scope.user={};
            }, function(response){
                showErrors(response.data);
            });
        }

        $scope.forceDelete=function(user)
        {
            flash.confirm(function() {
                $http.delete('/admin/trashed/user/'+user.id).then(function(response) {
                    var index=users.all.indexOf(user);
                    users.all.splice(index, 1);
                    var currentPage=$scope.pagination.currentPage;

                    var page=Paginator.setPaginationData(users.all, users.filtered, $scope.pagination)
                    $scope.pagination=page.pagination;
                    users=page.entity;
                    $scope.users=users.list;
                    $scope.setPage(currentPage);

                    flash.success('Usuário excluído com sucesso');
                }, function(response) {
                    setTimeout(function() {
                        flash.error('Usuário não pode ser apagado, verifique as relações, você precisa apagar todas antes.');
                    }, 100);
                });
            }, 'Excluir usuário: ' + user.name, 'Exclusão!', 'Sim, continuar', 'Cancelar');
        }

        $scope.ban=function(user)
        {
            flash.confirm(function() {
                $http.delete('/admin/user/'+user.id).then(function(response) {
                    var index=users.all.indexOf(user);
                    //users.all.splice(index, 1);
                    console.log(response.data);
                    users.all[index]=prepareUser(response.data);
                    var currentPage=$scope.pagination.currentPage;

                    var page=Paginator.setPaginationData(users.all, users.filtered, $scope.pagination)
                    $scope.pagination=page.pagination;
                    users=page.entity;
                    $scope.users=users.list;
                    $scope.setPage(currentPage);

                    flash.success('Usuário desativado com sucesso');
                }, function(response) {
                    setTimeout(function() {
                        showErrors(response.data);
                    }, 100);
                });
            }, 'Desativar usuário: ' + user.name, 'Bloquear!', 'Sim, continuar', 'Cancelar');
        }

        $scope.restore=function(user)
        {
            flash.confirm(function() {
                $http.put('/admin/restore/user/'+user.id).then(function(response) {
                    var index=users.all.indexOf(user);
                    //users.all.splice(index, 1);
                    console.log(response.data);
                    users.all[index]=prepareUser(response.data);
                    var currentPage=$scope.pagination.currentPage;

                    var page=Paginator.setPaginationData(users.all, users.filtered, $scope.pagination)
                    $scope.pagination=page.pagination;
                    users=page.entity;
                    $scope.users=users.list;
                    $scope.setPage(currentPage);

                    flash.success('Usuário desativado com sucesso');
                }, function(response) {
                    setTimeout(function() {
                        showErrors(response.data);
                    }, 100);
                });
            }, 'Reativar usuário: ' + user.name, 'Desbloquear!', 'Sim, continuar', 'Cancelar');
        }

        $scope.all=function()
        {
            $http.get('/admin/user/all').then(function(response) {
                var data=response.data;
                data=prepareUsers(data);
                var page=Paginator.setPaginationData(data, data, $scope.pagination)
                $scope.pagination=page.pagination;
                users=page.entity;
                users.allCopy=users.all;
                $scope.users=users.list;
            }, function(response) {
                showErrors(response.data);
            });
        }

        $scope.updatePasswordMe=function(user)
        {
            $http.put('/admin/user/me/password', user).then(function(response) {
                flash.success('Senha alterada com sucesso');
                $scope.user={};
            }, function(response){
                showErrors(response.data);
            });
        }

        $scope.updatePassword=function(user, id)
        {
            $http.put('/admin/user/'+id+'/password', user).then(function(response) {
                flash.success('Senha alterada com sucesso');
                $scope.user={};
            }, function(response){
                showErrors(response.data);
            });
        }

        $scope.setPage=function(page)
        {
            var data=Paginator.page(users, page, $scope.pagination);
            $scope.pagination=data.pagination;
            $scope.users=data.entity.list;
        }
        $scope.previous=function()
        {
            $scope.setPage($scope.pagination.currentPage-1);
        }
        $scope.next=function()
        {
            $scope.setPage($scope.pagination.currentPage+1);
        }

        var prepareUser=function(user)
        {
            user.updated=moment(user.updated_at).format('DD/MM/YYYY hh:mm');

            return user;
        }

        var prepareUsers=function(data)
        {
            for (var i = data.length - 1; i >= 0; i--) {
                data[i]=prepareUser(data[i]);
            }

            return data;
        }

        $scope.doFilter= function(search)
        {
                var filtered = $filter('filter')(users.all, search);
                var page=Paginator.setPaginationData(users.all, filtered, $scope.pagination)
                $scope.pagination=page.pagination;
                users=page.entity;
                $scope.users=users.list;
                $scope.setPage(1);
        };

        /**
         * Ordena objetos
         */
        $scope.order = function(property) {
            var usersOrder = OrderService.get('users', property);

            users.all=$filter('orderBy')(users.all, usersOrder);
            users.filtered=$filter('orderBy')(users.filtered, usersOrder);
            console.log(users.filtered);
            console.log(usersOrder);
            var page=Paginator.setPaginationData(users.all, users.filtered, $scope.pagination)
            $scope.pagination=page.pagination;
            users=page.entity;
            $scope.users=users.list;
            $scope.setPage(1);
        };

        /**
         * Ordem que está ordenado a propriedade
         */
        $scope.byOrder = function(property) {
            return OrderService.byOrder('users', property);
        };
}]);
/*
* @author: Leandro Henrique Reis <henrique@henriquereis.com>
* @date:   2016-05-29 19:37:24
* @last modified by:   Leandro Henrique Reis
* @last modified time: 2016-07-08 06:09:18
*/

'use strict';

angular.module('ruptZero')
.controller('ViewController', ['$scope', '$http', '$filter', 'Paginator', 'OrderService', 
    function($scope, $http, $filter, Paginator, OrderService){
        $scope.pagination= {
            perPage: 50,
            currentPage: 1,
            totalPages: 0,
            totalItems: 0,
            currentItem: 0,
            totalCurrentPage: 0, 
            pageNumbers: []
        };

        $scope.view={};
        var views={
            all: [],
            filtered: [],
            list: [],
            paginated: []
        };

        $scope.views=[];

        $scope.delete=function(view)
        {
            flash.confirm(function() {
                $http.delete('/admin/view/'+view.id).then(function(response) {
                    var index=views.all.indexOf(view);
                    views.all.splice(index, 1);
                    var currentPage=$scope.pagination.currentPage;

                    var page=Paginator.setPaginationData(views.all, views.filtered, $scope.pagination)
                    $scope.pagination=page.pagination;
                    views=page.entity;
                    $scope.views=views.list;
                    $scope.setPage(currentPage);

                    flash.success('Relatório excluído com sucesso');
                }, function(response) {
                    setTimeout(function() {
                        showErrors(response.data);
                    }, 100);
                });
            }, 'Continuar na exclusão de: ' + view.name, 'Exclusão!', 'Sim, continuar', 'Cancelar');
        }

        $scope.all=function()
        {
            $http.get('/admin/view/all').then(function(response) {
                var data=response.data;
                data=prepareViews(data);
                var page=Paginator.setPaginationData(data, data, $scope.pagination)
                $scope.pagination=page.pagination;
                views=page.entity;
                $scope.views=views.list;
            }, function(response) {
                showErrors(response.data);
            });
        }

        $scope.setPage=function(page)
        {
            var data=Paginator.page(views, page, $scope.pagination);
            $scope.pagination=data.pagination;
            $scope.views=data.entity.list;
        }

        $scope.previous=function()
        {
            $scope.setPage($scope.pagination.currentPage-1);
        }
        $scope.next=function()
        {
            $scope.setPage($scope.pagination.currentPage+1);
        }

        var prepareViews=function(data)
        {
            for (var i = data.length - 1; i >= 0; i--) {
                //data[i].updated=moment(data[i].updated_at).format('DD/MM/YYYY hh:mm');
            }

            return data;
        }

        $scope.doFilter= function(search)
        {
                var filtered = $filter('filter')(views.all, search);
                var page=Paginator.setPaginationData(views.all, filtered, $scope.pagination)
                $scope.pagination=page.pagination;
                views=page.entity;
                $scope.views=views.list;
                $scope.setPage(1);
        };

        /**
         * Ordena objetos
         */
        $scope.order = function(property) {
            var viewsOrder = OrderService.get('views', property);

            views.all=$filter('orderBy')(views.all, viewsOrder);
            views.filtered=$filter('orderBy')(views.filtered, viewsOrder);
            console.log(views.filtered);
            console.log(viewsOrder);
            var page=Paginator.setPaginationData(views.all, views.filtered, $scope.pagination)
            $scope.pagination=page.pagination;
            views=page.entity;
            $scope.views=views.list;
            $scope.setPage(1);
        };

        /**
         * Ordem que está ordenado a propriedade
         */
        $scope.byOrder = function(property) {
            return OrderService.byOrder('views', property);
        };
}]);
/*
* @author: Leandro Henrique Reis <henrique@henriquereis.com>
* @date:   2016-05-30 19:57:34
* @last modified by:   Leandro Henrique Reis
* @last modified time: 2016-07-03 10:08:49
*/
angular.module("PaginatorData", [])
.service("Paginator", [
function() {
        return {
            setPaginationData: function(all, filtered, pagination) {
                var chunk    = _.chunk(filtered, pagination.perPage);

                var entity={
                    all: all,
                    filtered: filtered,
                    list: chunk[0],
                    paginated: chunk
                };

                pagination.currentPage = 1;
                pagination.totalItems = Object.keys(filtered).length;
                pagination.totalPages = Math.ceil(Object.keys(filtered).length / pagination.perPage);
                pagination.pageNumbers = _.range(1, pagination.totalPages+1);
                pagination.currentItem=(pagination.currentPage*pagination.perPage)-pagination.perPage+1;
                pagination.lastCurrentPage=0;
                if (Object.keys(chunk).length>0) {
                    pagination.lastCurrentPage=chunk[0].length;
                }
                return {'entity': entity, 'pagination': pagination};
            },
            page: function(entity, page, pagination)
            {
                if (entity.paginated[page-1]==undefined) {
                    entity.list=[];
                    pagination.currentItem=0;
                    pagination.lastCurrentPage=0;
                    
                    return {'entity': entity, 'pagination': pagination};
                }
                pagination.currentPage = page;

                entity.list = entity.paginated[page-1];
                pagination.currentItem=(pagination.currentPage*pagination.perPage)-pagination.perPage+1;                          
                pagination.lastCurrentPage=(pagination.currentPage*pagination.perPage)-pagination.perPage+entity.paginated[page-1].length;

                return {'entity': entity, 'pagination': pagination};
            },
            next: function(entity, pagination) {
                if(pagination.currentPage == pagination.totalPages)
                {
                    return false;
                }

                pagination.currentPage = pagination.currentPage+1;

                entity.list = entity.paginated[pagination.currentPage-1];
                pagination.currentItem=(pagination.currentPage*pagination.perPage)-pagination.perPage+1;
                pagination.lastCurrentPage=(pagination.currentPage*pagination.perPage)-pagination.perPage+entity.paginated[page-1].length;

                return {'entity': entity, 'pagination': pagination};
            },
            previous: function(entity, pagination)
            {
                if(pagination.currentPage == 1)
                {
                    return false;
                }

                pagination.currentPage = pagination.currentPage-1;

                entity.list = entity.paginated[pagination.currentPage-1];
                pagination.currentItem=(pagination.currentPage*pagination.perPage)-pagination.perPage+1;
                pagination.lastCurrentPage=(pagination.currentPage*pagination.perPage)-pagination.perPage+entity.paginated[page-1].length;

                return {'entity': entity, 'pagination': pagination};
            }
        };
}]);
//# sourceMappingURL=app.js.map
