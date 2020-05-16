// eslint-disable-next-line import/no-extraneous-dependencies
import Mock from 'mockjs';
import AppConstants from '../constant/AppConstants';
// 获取 mock.Random 对象
const { Random } = Mock;
const { BASE_URL } = AppConstants;

Mock.mock(`${BASE_URL}/rest/login`, 'post', () => ({
  Authorization: 'test',
  rand: Random.time(),
}));
