/**
 * comprehensive版本 核心组件之一
 * 项目内部逻辑的配置
 * 无关CRA, Webpack, Babel等外层配置
 *
 * 假设项目是多角色的项目, 每个角色访问的页面都不一样
 *
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
 */

export const DEBUG = true;

export const Role = {
	guest: 'guest',
	user: 'user',
	admin: 'admin',
};
