/**
 * Tuesday 2022/11/8 09:47:54
 * author: francesca
 * email: 575525869@qq.com
 * src/api/student.js
 */
import request from 'axios'

// 获取学生分页列表数据
export const getStudentPagedList = ( pageIndex, pageSize, params ) => request( {
    url: '/student/studentPagedList',
    method: 'get',
    params: {
        ...params,
        pageIndex,
        pageSize,
    },
} )

