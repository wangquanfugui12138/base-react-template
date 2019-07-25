import { jest } from 'jest'
export default {
  getData: jest.fn(
    () => new Promise(
      (resolve) => resolve([
        {
          time: '2017-11-01 11:58:00',
          data: 'This is the data you request1'
        }, {
          time: '2017-11-01 11:58:00',
          data: 'This is the data you request2'
        },
      ]))
  )
}