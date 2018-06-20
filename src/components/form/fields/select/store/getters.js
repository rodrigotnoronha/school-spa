import { get } from 'lodash'

export const uniqueLoading = ({uniqueLoading}) => uniqueLoading
export const uniqueOptions = ({uniqueOptions}) => (key) => get(uniqueOptions, key, [])
export const uniqueStart = ({uniqueStart}) => (key) => get(uniqueStart, key, false)
