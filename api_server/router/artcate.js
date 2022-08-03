// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入文章分类的路由处理函数模块

const artCate_handler = require('../router_handler/artcate')

// 导入验证数据的中间件

const expressJoi = require('@escook/express-joi')

// 导入删除分类的验证规则对象

const { delete_cate_schema } = require('../schema/artcate')

// 导入文章分类的验证模块

const { add_cate_schema } = require('../schema/artcate')

// 导入根据 Id 获取分类的验证规则对象

const { get_cate_schema } = require('../schema/artcate')

// 导入更新文章分类的验证规则对象

const { update_cate_schema } = require('../schema/artcate')

// 获取文章分类的列表数据

router.get('/cates', artCate_handler.getArticleCates)

// 新增文章分类的路由

router.post('/addcates', expressJoi(add_cate_schema), artCate_handler.addArticleCates)

// 删除文章分类的路由

router.get('/deletecate/:id', expressJoi(delete_cate_schema), artCate_handler.deleteCateById)

// 根据 id 获取文章分类
router.get('/cates/:id', expressJoi(get_cate_schema), artCate_handler.getArticleById)

// 更新文章分类的路由
router.post('/updatecate', expressJoi(update_cate_schema), artCate_handler.updateCateById)


// 向外共享路由对象
module.exports = router