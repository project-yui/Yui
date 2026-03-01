import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelGroupSchoolService')
export class NodeIKernelGroupSchoolService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    batchGetUserGroupSchoolRole(...args: any[]) {
        log.info('batchGetUserGroupSchoolRole called with args:', args)
        const result = this.instance.batchGetUserGroupSchoolRole(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchGetUserGroupSchoolRole called  promise result:', result)
                return res
            })
        }
        log.info('batchGetUserGroupSchoolRole called result:', result)
        return result
    }
    checkInGroupSchoolTask(...args: any[]) {
        log.info('checkInGroupSchoolTask called with args:', args)
        const result = this.instance.checkInGroupSchoolTask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkInGroupSchoolTask called  promise result:', result)
                return res
            })
        }
        log.info('checkInGroupSchoolTask called result:', result)
        return result
    }
    confirmGroupSchoolNotice(...args: any[]) {
        log.info('confirmGroupSchoolNotice called with args:', args)
        const result = this.instance.confirmGroupSchoolNotice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('confirmGroupSchoolNotice called  promise result:', result)
                return res
            })
        }
        log.info('confirmGroupSchoolNotice called result:', result)
        return result
    }
    deleteGroupSchoolNotice(...args: any[]) {
        log.info('deleteGroupSchoolNotice called with args:', args)
        const result = this.instance.deleteGroupSchoolNotice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteGroupSchoolNotice called  promise result:', result)
                return res
            })
        }
        log.info('deleteGroupSchoolNotice called result:', result)
        return result
    }
    getGroupSchoolNoticeDetail(...args: any[]) {
        log.info('getGroupSchoolNoticeDetail called with args:', args)
        const result = this.instance.getGroupSchoolNoticeDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSchoolNoticeDetail called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSchoolNoticeDetail called result:', result)
        return result
    }
    getGroupSchoolNoticeList(...args: any[]) {
        log.info('getGroupSchoolNoticeList called with args:', args)
        const result = this.instance.getGroupSchoolNoticeList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSchoolNoticeList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSchoolNoticeList called result:', result)
        return result
    }
    getGroupSchoolNoticeStatistic(...args: any[]) {
        log.info('getGroupSchoolNoticeStatistic called with args:', args)
        const result = this.instance.getGroupSchoolNoticeStatistic(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSchoolNoticeStatistic called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSchoolNoticeStatistic called result:', result)
        return result
    }
    getGroupSchoolTaskCheckInInfo(...args: any[]) {
        log.info('getGroupSchoolTaskCheckInInfo called with args:', args)
        const result = this.instance.getGroupSchoolTaskCheckInInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSchoolTaskCheckInInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSchoolTaskCheckInInfo called result:', result)
        return result
    }
    getGroupSchoolTaskDetail(...args: any[]) {
        log.info('getGroupSchoolTaskDetail called with args:', args)
        const result = this.instance.getGroupSchoolTaskDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSchoolTaskDetail called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSchoolTaskDetail called result:', result)
        return result
    }
    getGroupSchoolTaskList(...args: any[]) {
        log.info('getGroupSchoolTaskList called with args:', args)
        const result = this.instance.getGroupSchoolTaskList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSchoolTaskList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSchoolTaskList called result:', result)
        return result
    }
    getGroupSchoolTaskStatistics(...args: any[]) {
        log.info('getGroupSchoolTaskStatistics called with args:', args)
        const result = this.instance.getGroupSchoolTaskStatistics(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSchoolTaskStatistics called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSchoolTaskStatistics called result:', result)
        return result
    }
    getGroupSchoolTaskUnCheckInInfo(...args: any[]) {
        log.info('getGroupSchoolTaskUnCheckInInfo called with args:', args)
        const result = this.instance.getGroupSchoolTaskUnCheckInInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSchoolTaskUnCheckInInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSchoolTaskUnCheckInInfo called result:', result)
        return result
    }
    getGroupSchoolTemplateList(...args: any[]) {
        log.info('getGroupSchoolTemplateList called with args:', args)
        const result = this.instance.getGroupSchoolTemplateList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSchoolTemplateList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSchoolTemplateList called result:', result)
        return result
    }
    getGroupSchoolToolboxInfo(...args: any[]) {
        log.info('getGroupSchoolToolboxInfo called with args:', args)
        const result = this.instance.getGroupSchoolToolboxInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSchoolToolboxInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSchoolToolboxInfo called result:', result)
        return result
    }
    modifyGroupSchoolTaskStatus(...args: any[]) {
        log.info('modifyGroupSchoolTaskStatus called with args:', args)
        const result = this.instance.modifyGroupSchoolTaskStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyGroupSchoolTaskStatus called  promise result:', result)
                return res
            })
        }
        log.info('modifyGroupSchoolTaskStatus called result:', result)
        return result
    }
    publishGroupSchoolNotice(...args: any[]) {
        log.info('publishGroupSchoolNotice called with args:', args)
        const result = this.instance.publishGroupSchoolNotice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('publishGroupSchoolNotice called  promise result:', result)
                return res
            })
        }
        log.info('publishGroupSchoolNotice called result:', result)
        return result
    }
    publishGroupSchoolTask(...args: any[]) {
        log.info('publishGroupSchoolTask called with args:', args)
        const result = this.instance.publishGroupSchoolTask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('publishGroupSchoolTask called  promise result:', result)
                return res
            })
        }
        log.info('publishGroupSchoolTask called result:', result)
        return result
    }
    remindGroupSchoolNotice(...args: any[]) {
        log.info('remindGroupSchoolNotice called with args:', args)
        const result = this.instance.remindGroupSchoolNotice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('remindGroupSchoolNotice called  promise result:', result)
                return res
            })
        }
        log.info('remindGroupSchoolNotice called result:', result)
        return result
    }
};
export const getNodeIKernelGroupSchoolService = (engine: any): any => {
    return class extends NodeIKernelGroupSchoolService {
        
    }
}