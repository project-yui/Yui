export class NodeIKernelECDHService {
    init(): any
    setGuid(a: any): any
    /**
     * 
     * @param a1 cmd ?
     * @param a2 seq ?
     * @param a3
     * @param a4  info[3] should be a hexadecimal string.
     */
    sendSSORequest(a1: string, a2: number, a3: string, a4: string): Promise<any>
    /**
     * 
     * @param a1 
     * @param a2 
     * @param a3 
     * @param a4 
     * @param a5 info[4] should be a hexadecimal string.
     */
    sendOIDBRequest(a1: number, a2: number, a3: number, a4: string, a5: string): Promise<any>
    setIsDebug(a: boolean): any
}