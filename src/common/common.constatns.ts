/**
 * 이메일 형식 체크 정규식
 */
export const REGEX_EMAIL =
  /^([0-9a-zA-Z_\\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
/**
 * 비밀번호 체크 정규식 (영문+숫자+특문조합 8자 이상)
 */
export const REGEX_PASSWORD =
  /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=\-,\\.<>/\\?~\\(\\)\\_\\[\]\\{\\}\\|;:])(?=.*[0-9]).{8,}$/;
