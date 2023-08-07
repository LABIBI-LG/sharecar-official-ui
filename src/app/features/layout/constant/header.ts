import { STATIC_ROUTES } from "src/app/core/constant/routes.constant";
import { Dropdown } from "src/app/core/interfaces/dropdown";
interface HEADER_NAV_INTERFACE {
  title: string;
  url: string
}
export const HEADER_NAV:HEADER_NAV_INTERFACE[] = [
  /**服務說明頁 */
  {
    title: 'DESCRIPTION.TITLE',
    url: STATIC_ROUTES.DESCRIPTION
  },
  /**據點查詢頁 */
  {
    title: 'AREA_QUERY.TITLE',
    url: STATIC_ROUTES.AREA_QUERY
  },
  /**Q&A */
  {
    title: 'FAQ.TITLE',
    url: STATIC_ROUTES.FAQ
  },
  /**聯絡我們 */
  {
    title: 'CONTACT.TITLE',
    url: STATIC_ROUTES.CONTACT
  },
]

export const  LANGS_SELECT:Dropdown[] = [
  {
    name: 'SHARE.ZH-TW',
    code: 'zh-tw'
  },
  {
    name: 'SHARE.EN',
    code: 'en'
  }
]
