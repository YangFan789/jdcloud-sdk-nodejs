/*
 * Copyright 2018-2025 JDCLOUD.COM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http:#www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 镜像仓库认证信息
 * 关于镜像仓库认证信息的相关接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../lib/node_loader')
var JDCloud = require('../lib/core')
var Service = JDCloud.Service
var serviceId = 'nc'
Service._services[serviceId] = true

/**
 * nc service.
 * @version 0.2.1
 */

JDCloud.NC = class NC extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'nc.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
         *  查询容器列表
         * @param {Object} opts - parameters
         * @param {integer} [opts.pageNumber] - 页码；默认为1  optional
         * @param {integer} [opts.pageSize] - 分页大小；默认为20；取值范围[10, 100]  optional
         * @param {filter} [opts.filters] - containerId - 实例ID，精确匹配，支持多个
privateIpAddress - 主网卡IP地址，模糊匹配，支持单个
az - 可用区，精确匹配，支持多个
vpcId - 私有网络ID，精确匹配，支持多个
status - 容器状态，精确匹配，支持多个
name - 实例名称，模糊匹配，支持单个
subnetId - 镜像ID，模糊匹配，支持单个
  optional
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param container containers
         * @param number totalCount
      */

  describeContainers (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeContainers"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}
    if (opts.pageNumber !== undefined && opts.pageNumber !== null) {
      queryParams['pageNumber'] = opts.pageNumber
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }
    Object.assign(queryParams, this.buildFilterParam(opts.filters, 'filters'))

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeContainers with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/containers',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  创建一台或多台指定配置的实例
         * @param {Object} opts - parameters
         * @param {containerSpec} [opts.containerSpec] - 创建容器规格  optional
         * @param {integer} [opts.maxCount] - 购买实例数量；取值范围：[1,100]  optional
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param string containerIds
      */

  createContainers (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createContainers"
      )
    }

    opts = opts || {}

    let postBody = {}
    if (opts.containerSpec !== undefined && opts.containerSpec !== null) {
      postBody['containerSpec'] = opts.containerSpec
    }
    if (opts.maxCount !== undefined && opts.maxCount !== null) {
      postBody['maxCount'] = opts.maxCount
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call createContainers with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/containers',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询容器详情
         * @param {Object} opts - parameters
         * @param {string} opts.containerId - Container ID
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param container container
      */

  describeContainer (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeContainer"
      )
    }

    opts = opts || {}

    if (opts.containerId === undefined || opts.containerId === null) {
      throw new Error(
        "Missing the required parameter 'opts.containerId' when calling describeContainer"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      containerId: opts.containerId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeContainer with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/containers/{containerId}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  删除单个实例
         * @param {Object} opts - parameters
         * @param {string} opts.containerId - Container ID
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  deleteContainer (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteContainer"
      )
    }

    opts = opts || {}

    if (opts.containerId === undefined || opts.containerId === null) {
      throw new Error(
        "Missing the required parameter 'opts.containerId' when calling deleteContainer"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      containerId: opts.containerId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call deleteContainer with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/containers/{containerId}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  启动单个实例
         * @param {Object} opts - parameters
         * @param {string} opts.containerId - Container ID
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  startContainer (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  startContainer"
      )
    }

    opts = opts || {}

    if (opts.containerId === undefined || opts.containerId === null) {
      throw new Error(
        "Missing the required parameter 'opts.containerId' when calling startContainer"
      )
    }

    let postBody = {}

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      containerId: opts.containerId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call startContainer with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/containers/{containerId}:startContainer',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  停止单个实例
         * @param {Object} opts - parameters
         * @param {string} opts.containerId - Container ID
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  stopContainer (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  stopContainer"
      )
    }

    opts = opts || {}

    if (opts.containerId === undefined || opts.containerId === null) {
      throw new Error(
        "Missing the required parameter 'opts.containerId' when calling stopContainer"
      )
    }

    let postBody = {}

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      containerId: opts.containerId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call stopContainer with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/containers/{containerId}:stopContainer',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  修改容器属性
         * @param {Object} opts - parameters
         * @param {string} opts.containerId - Container ID
         * @param {string} [opts.name] - 容器名称  optional
         * @param {string} [opts.description] - 容器描述；和description必须要指定一个  optional
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  modifyContainerAttribute (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  modifyContainerAttribute"
      )
    }

    opts = opts || {}

    if (opts.containerId === undefined || opts.containerId === null) {
      throw new Error(
        "Missing the required parameter 'opts.containerId' when calling modifyContainerAttribute"
      )
    }

    let postBody = {}
    if (opts.name !== undefined && opts.name !== null) {
      postBody['name'] = opts.name
    }
    if (opts.description !== undefined && opts.description !== null) {
      postBody['description'] = opts.description
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      containerId: opts.containerId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call modifyContainerAttribute with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/containers/{containerId}:modifyContainerAttribute',
      'PATCH',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  容器绑定公网IP 绑定的是主网卡、主内网IP对应的弹性IP
         * @param {Object} opts - parameters
         * @param {string} opts.containerId - Container ID
         * @param {string} opts.elasticIpId - 弹性IP ID
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  associateElasticIp (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  associateElasticIp"
      )
    }

    opts = opts || {}

    if (opts.containerId === undefined || opts.containerId === null) {
      throw new Error(
        "Missing the required parameter 'opts.containerId' when calling associateElasticIp"
      )
    }
    if (opts.elasticIpId === undefined || opts.elasticIpId === null) {
      throw new Error(
        "Missing the required parameter 'opts.elasticIpId' when calling associateElasticIp"
      )
    }

    let postBody = {}
    if (opts.elasticIpId !== undefined && opts.elasticIpId !== null) {
      postBody['elasticIpId'] = opts.elasticIpId
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      containerId: opts.containerId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call associateElasticIp with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/containers/{containerId}:associateElasticIp',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  容器解绑公网IP 解绑的是主网卡、主内网IP对应的弹性IP
         * @param {Object} opts - parameters
         * @param {string} opts.containerId - Container ID
         * @param {string} opts.elasticIpId - 弹性IP ID
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  disassociateElasticIp (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  disassociateElasticIp"
      )
    }

    opts = opts || {}

    if (opts.containerId === undefined || opts.containerId === null) {
      throw new Error(
        "Missing the required parameter 'opts.containerId' when calling disassociateElasticIp"
      )
    }
    if (opts.elasticIpId === undefined || opts.elasticIpId === null) {
      throw new Error(
        "Missing the required parameter 'opts.elasticIpId' when calling disassociateElasticIp"
      )
    }

    let postBody = {}
    if (opts.elasticIpId !== undefined && opts.elasticIpId !== null) {
      postBody['elasticIpId'] = opts.elasticIpId
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      containerId: opts.containerId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call disassociateElasticIp with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/containers/{containerId}:disassociateElasticIp',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询容器日志
         * @param {Object} opts - parameters
         * @param {string} opts.containerId - Container ID
         * @param {integer} [opts.tailLines]   optional
         * @param {integer} [opts.sinceSeconds]   optional
         * @param {integer} [opts.limitBytes]   optional
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param object logs
      */

  getLogs (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  getLogs"
      )
    }

    opts = opts || {}

    if (opts.containerId === undefined || opts.containerId === null) {
      throw new Error(
        "Missing the required parameter 'opts.containerId' when calling getLogs"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.tailLines !== undefined && opts.tailLines !== null) {
      queryParams['tailLines'] = opts.tailLines
    }
    if (opts.sinceSeconds !== undefined && opts.sinceSeconds !== null) {
      queryParams['sinceSeconds'] = opts.sinceSeconds
    }
    if (opts.limitBytes !== undefined && opts.limitBytes !== null) {
      queryParams['limitBytes'] = opts.limitBytes
    }

    let pathParams = {
      regionId: regionId,
      containerId: opts.containerId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call getLogs with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/containers/{containerId}:getLogs',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询资源的配额
         * @param {Object} opts - parameters
         * @param {string} opts.resourceType - 资源类型  container：用户能创建的容器的配额  secret：用户能创建的secret的配额
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param quota quota
      */

  describeQuota (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeQuota"
      )
    }

    opts = opts || {}

    if (opts.resourceType === undefined || opts.resourceType === null) {
      throw new Error(
        "Missing the required parameter 'opts.resourceType' when calling describeQuota"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.resourceType !== undefined && opts.resourceType !== null) {
      queryParams['resourceType'] = opts.resourceType
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeQuota with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/quotas',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询secret列表
         * @param {Object} opts - parameters
         * @param {integer} [opts.pageNumber] - 页码；默认为1  optional
         * @param {integer} [opts.pageSize] - 分页大小；默认为20；取值范围[10, 100]  optional
         * @param {filter} [opts.filters] - name - secret名称，支持模糊搜索
  optional
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param secret secrets
         * @param number totalCount
      */

  describeSecrets (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeSecrets"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}
    if (opts.pageNumber !== undefined && opts.pageNumber !== null) {
      queryParams['pageNumber'] = opts.pageNumber
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }
    Object.assign(queryParams, this.buildFilterParam(opts.filters, 'filters'))

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeSecrets with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/secrets',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  创建 secret
         * @param {Object} opts - parameters
         * @param {string} opts.name - 机密数据名称，不能重复
         * @param {string} opts.secretType - 私密数据的类型，目前仅支持如下类型：docker-registry：用来和docker registry认证的类型
         * @param {dockerRegistryData} [opts.data] - 机密的数据  optional
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param string secretName
      */

  createSecret (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createSecret"
      )
    }

    opts = opts || {}

    if (opts.name === undefined || opts.name === null) {
      throw new Error(
        "Missing the required parameter 'opts.name' when calling createSecret"
      )
    }
    if (opts.secretType === undefined || opts.secretType === null) {
      throw new Error(
        "Missing the required parameter 'opts.secretType' when calling createSecret"
      )
    }

    let postBody = {}
    if (opts.name !== undefined && opts.name !== null) {
      postBody['name'] = opts.name
    }
    if (opts.secretType !== undefined && opts.secretType !== null) {
      postBody['secretType'] = opts.secretType
    }
    if (opts.data !== undefined && opts.data !== null) {
      postBody['data'] = opts.data
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call createSecret with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/secrets',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询 secret 详情
         * @param {Object} opts - parameters
         * @param {string} opts.name - Secret Name
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param secret secret
      */

  describeSecret (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeSecret"
      )
    }

    opts = opts || {}

    if (opts.name === undefined || opts.name === null) {
      throw new Error(
        "Missing the required parameter 'opts.name' when calling describeSecret"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      name: opts.name
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeSecret with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/secrets/{name}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  删除 secret
         * @param {Object} opts - parameters
         * @param {string} opts.name - Secret Name
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  deleteSecret (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteSecret"
      )
    }

    opts = opts || {}

    if (opts.name === undefined || opts.name === null) {
      throw new Error(
        "Missing the required parameter 'opts.name' when calling deleteSecret"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      name: opts.name
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  nc/0.2.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call deleteSecret with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/secrets/{name}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
}
module.exports = JDCloud.NC
