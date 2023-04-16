import service from '../utils/http.js'

export function stream() {
  return service({
    url: '/stream',
    method: 'get',
  }) 
}
