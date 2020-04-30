'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 访问的时候 路径是/时
  router.get('/', controller.home.index);
  router.get('/catItems', controller.home.getCatItems);
  router.get('/swiperList', controller.home.getSwiperList);
  router.get('/floorData', controller.home.getFloorData);
};
