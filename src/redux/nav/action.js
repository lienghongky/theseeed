import * as actionConst from './actionConst'
export const selectLink = link => {
    return {
        type : actionConst.NAV_SELECT,
        payload:link
    }
}

export const selectLinkByPath = path => {
  return {
      type : actionConst.NAV_SELECT_BY_PATHG,
      payload:path
  }
}
