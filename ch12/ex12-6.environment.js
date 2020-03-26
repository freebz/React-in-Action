// 예제 12.6  브라우저 환경 인식하기(src/utils/environment.js)

export function isServer() {
    return typeof window === 'undefined';
}
