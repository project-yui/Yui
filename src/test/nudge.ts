import { load } from "protobufjs"
import { useLogger } from "../common/log"
import { useStore } from "../store/store"
import fs from 'fs'

const log = useLogger('Test/Nudge')

/**
 ------------0---------------

1 {
  1: 1690127128
  2: "u_K54_tDilsiaIV_m0q4XgCg"
  5: 335438501
  6: "u_EbxBsO-JLi3oxEYabJ0umg"
}
2 {
  1: 528
  2: 290
  3: 290
  4: 670385261
  5: 1084819152
  6: 1712971622
  12: 144115188746241133
  13: 4
}
------------1---------------
1 {
  1: 1690127128
  2: "u_K54_tDilsiaIV_m0q4XgCg"
  5: 335438501
  6: "u_EbxBsO-JLi3oxEYabJ0umg"
}
2 {
  1: 528
  2: 290
  3: 290
  4: 465010813
  5: 1084819154
  6: 1712971622
  12: 144115188540866685
  13: 4
}
------------2---------------
1 {
  1: 933286835
  2 {
    7: 0x3533383638323333
  }
  5: 335438501
}
2 {
  1: 732
  2: 20
  3: 20
  5: 6957
  6: 1712971879
  12: 144115188093944540
  13: 4
}
------------3---------------
1 {
  1: 933286835
  2 {
    7: 0x3533383638323333
  }
  5: 335438501
}
2 {
  1: 732
  2: 20
  3: 20
  5: 64957
  6: 1712971879
  12: 144115188099842780
  13: 4
}
----------4-------
对方自己戳自己
1 {
  1: 1690127128
  2: "u_K54_tDilsiaIV_m0q4XgCg"
  5: 335438501
  6: "u_EbxBsO-JLi3oxEYabJ0umg"
}
2 {
  1: 528
  2: 290
  3: 290
  4: 314918456
  5: 248810949
  6: 1712974613
  12: 144115188390774328
  13: 4
}
 */
export const nudgeTest = () => {
    const { registerEventListener } = useStore()
      let i = 0
      registerEventListener('KernelMsgListener/onRecvSysMsg', 'always', (data: number[]) => {
        log.info('sys msg:', data)
        const buf = Buffer.from(data)
        fs.writeFileSync(`tmp/test${i++}.bin`, buf)
        load('src/test/poke.proto', (err, root) => {
          if (err) {
            log.error('error:', err)
            return
          }
          const ntMessage = root?.lookupType('NTMessage')
          if (!ntMessage) {
            log.error('nt message not found')
            return
          }
          const data = ntMessage.decode(buf)
          log.info('content:', JSON.stringify(data, null, 4))
        })
      })
  }