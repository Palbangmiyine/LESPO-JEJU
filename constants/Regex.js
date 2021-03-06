export function verifyEmail(emailVal) {
  var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  //   var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // 검증에 사용할 정규식 변수 regExp에 저장

  if (emailVal.match(regExp) != null) {
    // email 형식 통과
    return false;
  } else {
    return true;
  }
}

export function verifyName(nameVal) {
  // 한글 이름 2~4자 이내
  var regKO = /^[가-힣]{2,4}$/;
  // 영문 이름 2~10자 이내 : 띄어쓰기(\s)가 들어가며 First, Last Name 형식
  var regEN = /^[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;

  // 검증에 사용할 정규식 변수 regExp에 저장

  if (nameVal.match(regKO) != null || nameVal.match(regEN) != null) {
    // name 형식 통과
    return false;
  } else {
    return true;
  }
}

// 핸드폰 번호 체크 정규식
function isCelluar(asValue) {
  var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

// 비밀번호 체크 정규식
export function verifyPassword(asValue) {
  var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,12}$/; //  6 ~ 12자 영문, 숫자 조합

  if (asValue.match(regExp) != null) {
    // email 형식 통과
    return false;
  } else {
    return true;
  }
}
