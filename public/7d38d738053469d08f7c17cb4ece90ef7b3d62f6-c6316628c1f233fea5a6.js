(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[790],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,A,s,l;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(A=c;0!=A--;)if(!i(e[A],o[A]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(A=l.next()).done;)if(!o.has(A.value[0]))return!1;for(l=e.entries();!(A=l.next()).done;)if(!i(A.value[1],o.get(A.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(A=l.next()).done;)if(!o.has(A.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(A=c;0!=A--;)if(e[A]!==o[A])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(A=c;0!=A--;)if(!Object.prototype.hasOwnProperty.call(o,s[A]))return!1;if(t&&e instanceof Element)return!1;for(A=c;0!=A--;)if(("_owner"!==s[A]&&"__v"!==s[A]&&"__o"!==s[A]||!e.$$typeof)&&!i(e[s[A]],o[s[A]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var A,s=[];function l(){A=e(s.map((function(e){return e.props}))),u.canUseDOM?t(A):r&&(A=r(A))}var u=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return A},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=A;return A=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(u,"canUseDOM",c),u}}},4663:function(e,t,r){"use strict";r.d(t,{Z:function(){return A}});var n=r(7294),a=r(6016),i=r(1710),o=(r.p,r.p+"static/ReadingSchool-78f92b8a0d68e61fb58ea1400b924677.png"),c=r.p+"static/Kendrick-ddb5a22616e7ed772e28ea2f975a79f5.png",A=function(){return n.createElement("div",{className:"footer"},n.createElement("div",{className:"footerContent"},n.createElement("div",{className:"socialMedia"},n.createElement("a",{href:"https://www.instagram.com/the_asteria_magazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:a.Z,alt:"Instagram logo"})),n.createElement("a",{href:"https://www.linkedin.com/company/theasteriamagazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:i.Z,alt:"LinkedIn logo"}))),n.createElement("div",{className:"buttons"},n.createElement("a",{href:"https://forms.office.com/r/T07YM8j0Y0",target:"_blank",rel:"noreferrer"},"Feedback")),n.createElement("div",{className:"contact"},n.createElement("p",null,"Contact us:",n.createElement("br",null),"theasteriamagazine@gmail.com")),n.createElement("div",{className:"schools"},n.createElement("a",{href:"https://www.kendrick.reading.sch.uk/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:c,alt:"Kendrick logo",title:"Kendrick School"})),n.createElement("a",{href:"https://www.reading-school.co.uk/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:o,alt:"Reading School logo",title:"Reading School"})))),n.createElement("p",{className:"base"},"© 2022 Asteria | All Rights Reserved"))}},3088:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),a=r(6016),i=r(1710),o=r.p+"static/settings-5a9b1f24255c107115bcae5551ed8321.png",c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAI8rAACPKwFlSdieAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACl5/7/AAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAFWtJREFUGBntwQmAznX+B/D388zpmoz7ppDK6EQKFeVKYZNKatnqXxNtkWytFaUTbXalQ23pcERtjuxuixxl5b6mJNeIXMlMjhnmeJ733xWDmTHzPN/v7/f9Pr/P6wUIIYQQQgghhBBCCCGEEEIIIYQQQggRmWITKtW68NKmLZs3vrRBnWrly8RCRDR/pUY33t33pXdnLFm7eUdaZoBnyTqwY82cyW8MffTutlfWLgURGSq3vH/YhNkpuwMsnn2rp/29b5fLy0JYKuGq7kPGL93HMKWvnDLyoWvKQNgjtkmfd+bvpErBzVOf69YgCsJw/kt6vr4ki5pkLnvvsatjIMxU+/bhc/dTu8x5z7c/D8IsDR6ZupvOCax+/e5aEGaoeNe7W+mCrR/dXQHCXfFthq8M0jWBRc9c7YdwyeV/mnWIrvtl/D0VIRx31cubaIrg0mcaQjjoqmGbaJjvBjeAcETjYZtppFUD60Jo1mT4Zhps2YDaENpUHbiJxlv4QGkIDfztP8uhFQ680xRCsepPb6FF1vwxEUKZqFum5dIyh8ZdD6FEzWe20Urr+ydAhKvZlACtte+VmhBh8HX8inbLGXc5RIhifp/CCDCrHUQISvfbygixpmcMRPFUei6NEeSnR+Mgiu6CNw4xwmx7KAaiaKq8kcMItLlXFMS5lRl6kBHqh+5+iMLFPraHESzlNh9EwXz3pDLCLW8LUZD2q+gB0+tD5KfpXHpD1ogEiDNVn0Tv2P2AHyKv6P4H6CkrWkKc0mINPWdSLYjjKo4N0oMyB8VAAP6H0uhRKc0grlxM7wqMKg1vO++1AD1ta0d42W276HkTK8GrEt6nIPf2gjddt4XimNm14D1xwwMUJ6TfCa+5dDVFHh+UgZf4B2RRnGZTM3hH7fkUZ8oZHAWP6LmPIh8L6sB9iQ3bdGpSPQr6lJpIkb99PeCii56c+NXGTB4T2LFs+t/bx0GDBt9SFGhsPFzhbz78B55l/+QeiVDstv0UhVheB85LevdnFiDny55+qBM1nKJwe9vBYTXeC7AwKR2hSuW5FOcS+IsPDjrvpUyey7ymUOLa7RRFMO08OCWm314WxeQLEL4/ZlMUyfokOKPCPBbRvo4IU6kJFEV18C44oVEqiyzwJMJyfgpFMbzsg3a/O8DiGBeP0DXeRVEsk+Kgl29wkMWzpDpCdWsGRTEtKA+txrDYfqqB0PTOpSi29XWh0aMMwbISCIFvOEUo9lwDbW7KZSgmovjiPqYIzaGu0KReGkMzEMVV7iuKUAX7Q4uE7xiiwK0onvO/pwjDaD80mMqQ7b8QxdF4F0VYxkdDuQ4MwzQUQ/sMijB9FgvF/GsYjhYoslsPU4TtixJQqyfD8g2K6nfZFArMKwOV4rcyPLehaO7IoVBiUSIUGsAw/RCNouiRS6HIqopQpmw6w/UQiqBXgEKZ76tDlV4M2yKc2/8FKRTaVBuKTGHYglVxLr2DFEptrAolSmQwfA/iHPpSqPZdBahwKxX4Fwo3gEK9FWWhwD+owOHSKEwfCh0WlkbY/Lupwu0oRLcAhRZz4hGuplTiPRSsdRaFJv+KQZjuohLzUKAr91No82kUwvM4lViPgtTdRaHRhz6E5a9UIgMFqLyJQqsRCMtEqnEe8pWwgkKzhxGO+VTjYuQnbg6Fbrk3IwwbqMaNyIf/Ewr9DlyB0GVQjXuRj9dpif3rl349c/rkD98eNXzosDfGTZuzdN32/UHaYntNhIyKJONsT9BsgY1fjH3x0W4t6pVCfnylqzZo3KrL42Pm7qDh1iQgVFQkGWdpl0tTHVr98ZA7GsWhqBIa9xg6aVUGjfXfaISIiiTjTPXTaaKDc1/sdIEfofDVavPIawtzaKJ/IERUJBlnSFhL42z8qPcVUQhTmZtfWRGkcZ5CaKhIMk7nm06zbHqtU0WoUq7r69/TLIG2CAkVScbpnqdBsr/sfxFUq9rj3VQaZG8dhIKKJOM03WiMne92TYAm598/I4emWB6PEFCRZOR12UGaYe+bzX3QqnK/lTTEewgBFUlGHhVSaYLDn3SOhQMajdhBIzyE4qMiyTglei7dF5x3/3lwSlS78Zl0X9bVKDYqkoxTRtN1u56pCWeVuW9ekG7bVgnFRUWScVJfum3JPbFwQe1BqXTZnCgUExVJxm+6Buiq7InXwC3R966lu4ahmKhIMk5ofohu+vm5anCTr+tyuil4E4qHijyJ4y78hS7a/kgcXNdhAV20vTyKhYq8imMqbaJ7dj4WDyNcP5PumYJioSKzcdS16+ia3Y+XgDGaTA3SLQ+iOKhIsAFQZnSQbvl5QEkYJWlCLt2R0QDFQFV2PNJ/K91ycFApGKf+53TH8hgUHSPBhOowUuctdMUwFB3tt7IlTFXypWy6INAKRUbb/ZLsh8EunksXbEtEUdFuuaMTYbgeu+i8D1BUtNryy2C+80YH6Lh2KCJaLGtQNKxw1RI6LbUUiob2WtYItvAnp9Fhf0PR0FZZf4mGRap8SWcFrkaR0FLLkmAX/5AAHfVtLIqCVsp9OhrWab2TjhqCoqCNdt4AG1WeTSdlXYIioIXmVoGd/EMCdNBCP86N1gm+EAVrtdpJB/XBudE2v9wMm1WeTeeklcc50TKLasFu/sEBOmY0zol2eScG1mu1k07JbYhzoU2CTyESVFtDp8zEudAih+9EZCj7FZ1yK86B9vilOSJF/BQ6ZH0MCkdrbKiPyBH1Nh3yOApHWyyogIgylM74tSIKRUt8Go8I0ydAR7yFQtEO46MQcbpl0Qm5SSgMrTDWjwjUej+dMAWFoQ3e8iEiXbGLTrgKhaAFRvkQoepupAP+jULQfCMQuaql0gHXomA03guIZBfuoX5fomA03UuIbE0OUL8bUCAa7j1EurbZ1G4BCkSzzYhGxLs7SO3aoSA02sKS8IB+1G4JCkKTrS0HT3iZ2nVCAWiwn2rBI8ZSt29QAJorPQleET2DujVH/mis7OvgHSUXUrMpyB+N9TC8pNx31CtQH/miqf4Bb6mTRr3eRL5oqG9i4TGdqVdmBeSHZtpRFZ7zKvUajPzQSFnXwHtiFlGrn+ORDxrpAXhR7TRq9SDyQRO9CW/qTK3W+XA2GmhNHDxqJLXqiLPRPIcvhVfFLKZO03E2mqc/vKtOOjXKrY6z0DhzfPCwLtRpEM5C06TXhKeNpEapfpyJpukOb4tZTI3a4Uw0zHh4Xf3D1OdTnIlm2VYWnvcs9cmujDPQLN0h4jdSnydxBhplsQ8CHajPBh9OR6O0gDjin9SnNU5Hk3wBcVSNg9TmQ5yOJrkL4pgnqM2+eJyGBtkXD3FMdAq16YLT0CBjIU5oSW0m4jQ0yMMQv3mfuhwsgbxokBYQv6mYRl26IS8apDzEScnU5RPkRYNUgjjJv4SaZJZGHjTIRRCntKYu3ZEHDdIBIo9vqMlU5EGDfACRxy3U5HACTqFBDlSAyGMVNemOU2iSeTEQp9xBTT7CKTTK9PMhTvL/QD1+9uEkmiVr7GPtm+V1RRU/PKsXNWmCk2i8nJ+WTHn9ySvhQTFbqMdgnERbbB3dJgZe05t6fIOTaJFfJ3aCt8TvpBaB8vgN7fJNS3jKE9SjO35D20y7BB5Sei+1+BC/oXVy36kG7xhMLXb7cAItlN4WnpGYQS0a4wTaKLcfPGMctRiEE2insXHwiLbU4r84gZZaWAXe4N9OHfb5cRxtta02vGE4tbgMx9Faq0rBE5KoRW8cR3t96oMnrKAO43EcLTYEntCXOqTiOFoseBu8oFIOdaiOY2izg0nwgs+pQzccQ6vNgxd0ow5/wzG0W0d4QFw6NViKY2i3FD88YAw1yCmFo2i5P8ADmlOH5jiKltsWDw/YRA0exlG03ZPwgFHU4E0cRdtthgd0oQb/w1G0XiNEvsQA1dvnwxG03tPwgGXUoA6OoPWWwQOGU4NOOIL2q4HI154aDMIRtF9vRL5S2VRvEo6g/f4ND1hA9b7HEbTfJnjAUKqXGw+A9jsED7iBGlwJgBEgEZEvLpPq3QmAESAJHjCb6j0FgBGgLTxgINUbA4ARoBc8oBnVmwmAEWAgPCD6AJXbAGA/7TcQXrCYymX5gXW0Xy94wYdUryYwh/ZrCy/4C9W7DviI9msIL7id6vUEhtF+ifCCRlRvCPAorZcJT4gPULn3gdtpvY3whlQqNx9IovVmwBu+oHLfA0il7R6CN4yicj8D+BstF6wGb+hD5XJ9QCtabjE84iaqlwhEp9FuA+ERNalePQAf0W4N4RG+DCp3NYDbabWN8IyVVO5mAPFbabP+8IyPqdy9OKIXLbYlDp4xgsr1wxH+NbTXvfCOp6nc8zjqZlprlQ/e0ZfKvYlj5tBWbeEh91O5yTimSZB2mgUvuYPKzcBxr9FK+y+Gl3SgcrNwXPQcWihwKzylBZWbjxPKb6J9/gxvuYzKLcJvkg7QNhPgMRdQuRU4qXOQdllWAh5Tkcp9h1OeoFVSa8Br4qncBuRxZwbtMa8CvCebqm1FXldupS3ejIEH7aVqu3Gayv+jFXIehidtoWrpOF3su7TAnhvgTSlULRNn6rCGhst+rSI8aiFVy8VZ/D230mST6sGzFlK1XOQj/k/pNNXcJvCwFKqWiXwlDlgQoHn2jG0LT9tC1dJRkEr3TcukSTa80jIKHreXqu1GIUp2HvL2jBW7g3RX5savJv71sUsgkE3VtuLcYmpedrl7Li4LcUI8ldsIYY+KVO47CHtcQOVWQtjjMiq3CMIeLajcfAh7dKBysyDscQeVmwFhj/up3GQIe/Slcm9B2ONpKvc8hD1GULl+EPb4mMr9HsIeK6lcRwhr+A5SuWYQ1qhB9epBWONGqpcIYY3eVC7XB2GNv1O5PRD2+ILKrYOwRyqV+wrCGvEBKvcBhDWSqN6zENboSvV6QVhjINW7HsIaH1C9WhDWWETlsv0QtojaT+U2QlijKdWbBWGNp6je2xDWmEn1/gxhi9hMqncXhC2upwaNIWzxLNULlICwxddU7wcIW5TKpnqfQNiiHTV4GsIWw6hBZwhbLKMGF0BYomyA6h3wQViiCzVYCGGLUdTgLQhbbKIGfSAs0Zw6tISwxBhqkFsawg5x6dRgOYQlulGHURCW+Jw63Alhh0o51KEGhB36UocfISyxgjpMgLBDErXoA2GH4dTicggr+LdTh/1REFZoSy1mQthhHLUYDGGFxAxq0RTCCoOpxR4/hA1K76UW4yCs8AT16AFhg/id1CJQAcIGvanHYggbxGyhHs9A2KAXNbkawgL+H6jHL34IC9xBTcZD2GAVNbkHwgK3UJOsshAW+IaaTIewQGvqcg+E+fxLqMmhMhDmS6Yun0GYr2IadbkTwnzvU5eMUhDGa0ltJkMYLzqF2nSFMN4T1OZACQjT1ThIbcZDGO+f1KcNhOk6UJ/NPgjDxW+kPgMhTPcs9cmpCmG4+oepz1QIw8UspkY3QxhuJDXa6ocwWxfqNATCbHXSqVGgJoTRYhZTp39BmG0kteoEYbTO1GqDH8JktdOoVW8Ik8Usola/lIQw2avUayiEyTpTr0OVIAxWJ416vQ1hsHLfUa/gRRDmKrmQmn0OYa7oGdTteghzjaVuSyHM9TK1uw3CWP2o3XIfhKnuDlK7jhCmaptN7RZCmKrJAep3I4ShLtxD/eZCGKpaKh3QHMJMdTfSAf+BMNMVu+iExhBGar2fTpgCYaRuWXRCbhKEifoE6IgxECYaSmf8WhHCPFFv0yFPQJgnfgodsiEWwjhlv6JTOkMYp9oaOmU2hHFa7aRTchtBGMY/OEDHvAVhmMqz6ZxfK0KYpdVOOqgvhFH8QwJ00JIoCJNUnk0nZV8KYZLWO+mo5yEM4h8SoKO+j4MwR5Uv6axgCwhj+JPT6LDXIYxx1RI6bVsZCEOcNzpAx90CYYgeu+i8iRBmuHguXbCjAoQJSr6UTRcE20KYoPMWuuJVCAPU/5zuWB0H4bqkCbl0x6GGEG5rMjVIt/SBcNn1M+meGRDu6rCALtpVCcJFvq7L6aoOEO6Jvnct3TUSwjW1B6XSZV/HQLijzH3zgnTbjqoQbohqNz6T7stuAeGCRiN20AiPQjiucr+VNMR4CIedf/+MHJpidUkIB1Xt8W4qDZJeF8Ip5bq+/j3NErwFwhFlbn5lRZDGGQyhm69Wm0deW5hDE30IoVFC4x5DJ63KoLHmxkKo5itdtUHjVl0eHzN3Bw23tiyEAokN2/T887A3xk2bs3Td9v1B2mJXHYjwVOg1YcHmQ7RTRlOIcNR9fH4u7RXoAhG6pBe+pd36QoSs9kdBWm4URKgSXzlM203yQ4QmfkAarTc9BiI0v/uR9psVBxES37OMAAtKQYSk1KeMAEsTIEJSayUjQEp5iJBcu5sR4IfKECHpnsUIsKUmREiuy2YE+LEuREjO38MIsKEWREhKpzACpFSBCIl/GiPA0vIQoXmJEeDrBIjQdGcEmFkSIjRlfqb9psZBhGgo7Tc+GiJEVQ7SeqP9EKF6i7YL9ocIWYMcWu5QV4jQfUbL7bkGInTNaLn1dSHCMIZ2W1AeIgy+HbTapDiIcDSj1V72QYTlJVosoztEmL6nvTY2ggjThbTXjLIQ4foTbRV8xgcRtrm0VHpHCAV+pJ3W1INQwJdFK00oCaFCBdrowH0QalxKCy2uB6FIe1ond2g0hCr30TapzSHUGUTLfJQAodDrtMqv3SGUGkmbzK4FodYA2iPtDxCq3UNrTK4MoVxrWuKnThAaXEQrBN9MgNAhgTZY1xJCk4M0XtbzcRC6rKfpptWD0GcqzfbtTRA63UeT7X0kCkKrigEaK+e1chC6fU1TzWwIoV9/mimlE4QT6tFE6+7yQzjjWxpn4++jIJzyAg2z5f5oCOfUOkSTbHs4FsJRI2iOnx6Ng3BYYhoNsaZnDITzBtAIs9pBuCJ+K12XM+5yCLf0osv2vVITwj3+NXTT+v4JEK66IoNuOTyhlQ/CbV2DdMXafuUhTDCEzsv8oAWEIXyT6bAVj5SFMEfJ5XTQt083gDBLjZ10yLqhDSHMk7SZDtj44mUQZqown5qlvHwVhLli3qY++/75QA0Iwz2aSy1WvXx9NIQF2qRTtd2f3FcNwhbnT6Y6wbXv9KoPYZem86jCoa9euqUchI1u+ZZhyVz23mPNYiGsFXX/TwxJcPPU57o1iIKwXUyb0VtZHPtXTx350DVlICLHlc+u5jkdXvefNwbc3rg8RCSq8+Dz732xeg/zyjqwI2Xup2NefLznLddcWM4HEfliazdr3vjSBnWqlS8TCyGEEEIIIYQQQgghhBBCCCGEEEIIIazz/yeiliLyoDYzAAAAAElFTkSuQmCC",A=function(e){var t=e.click,r=e.isOpen;return n.createElement("div",{className:"toggle-btn "+(r?"side":"normal"),onClick:t},n.createElement("div",{className:"toggle-btn-line top"}),n.createElement("div",{className:"toggle-btn-line middle"}),n.createElement("div",{className:"toggle-btn-line bottom"}))},s=function(e){var t=e.isOpen,r=e.isDark,A=e.click,s=function(){return r?"invert":"noinvert"};return n.createElement("div",null,n.createElement("div",{className:"backdrop "+(t?"show":"hide")}),n.createElement("div",{className:"sideDrawer "+(t?"show":"hide"),onClick:A},n.createElement("div",{className:"social-media"},n.createElement("a",{href:"https://www.instagram.com/the_asteria_magazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{className:s(),src:a.Z,alt:"Instagram logo"})),function(){if("undefined"!=typeof document)return document.location.pathname.includes("settings")?n.createElement("a",{onClick:function(){return window.history.back()},className:"settingsBinder"},n.createElement("img",{className:s()+" settings",src:c,alt:"Back arrow"})):n.createElement("a",{href:"/settings"},n.createElement("img",{className:s()+" settings",src:o,alt:"Settings"}))}(),n.createElement("a",{href:"https://www.linkedin.com/company/theasteriamagazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{className:s(),src:i.Z,alt:"LinkedIn logo"}))),n.createElement("div",{className:"pages"},n.createElement("a",{href:"/articles"},"Articles"),n.createElement("a",{href:"/performances"},"Performances"),n.createElement("a",{href:"/meet-the-team"},"Meet the Team"),n.createElement("a",{href:"/about"},"About"))))},l=function(){var e=(0,n.useState)(0),t=e[0],r=e[1],l=(0,n.useState)(10),u=l[0],f=l[1],m=(0,n.useState)(!1),d=m[0],C=m[1],p=(0,n.useState)(!1),h=p[0],g=p[1],Q=(0,n.useRef)(t);Q.current=t;var b=(0,n.useRef)(u);b.current=u;var T=(0,n.useRef)(d);T.current=d;var E=(0,n.useRef)(h);E.current=h;var y=(0,n.useState)(!1),w=y[0],v=y[1],S=(0,n.useState)(!0),I=S[0],k=S[1];(0,n.useEffect)((function(){O(),R();var e=setInterval((function(){E.current&&(Math.floor((Q.current+b.current)/180)>Math.floor(Q.current/180)&&b.current<15?(g(!1),r((function(e){return e-e%180}))):(r((function(e){return e+b.current})),f((function(e){return e-.3})))),T.current&&(r((function(e){return e+b.current})),f((function(e){return e+.1})))}),50);return function(){clearInterval(e)}}),[]);var O=function(){null==localStorage.getItem("isDark")?window.matchMedia("(prefers-color-scheme: dark)").matches?(localStorage.setItem("isDark","1"),document.body.setAttribute("data-theme","dark"),k(!0)):(localStorage.setItem("isDark","0"),document.body.removeAttribute("data-theme"),k(!1)):"1"===window.localStorage.getItem("isDark")?(document.body.setAttribute("data-theme","dark"),k(!0)):(document.body.removeAttribute("data-theme"),k(!1))},R=function(){null===localStorage.getItem("font-size")?(document.body.setAttribute("font-size",16),localStorage.setItem("font-size",16)):document.body.setAttribute("font-size",localStorage.getItem("font-size")),null===localStorage.getItem("dyslexia")?(document.body.setAttribute("dyslexia",0),localStorage.setItem("dyslexia",0)):document.body.setAttribute("dyslexia",localStorage.getItem("dyslexia"))},M=function(e){v(!w),w?document.body.classList.remove("stop-scrolling"):document.body.classList.add("stop-scrolling")},N=function(){return I?"invert":"noinvert"};return n.createElement(n.Fragment,null,w?n.createElement("div",{className:"spacer"}):null,n.createElement("div",{className:"navbar "+(w?"topbar":"")},n.createElement(A,{isOpen:w,click:M}),n.createElement(s,{isDark:I,isOpen:w,click:M}),n.createElement("div",{className:"contents"},n.createElement("div",{className:"logo"},n.createElement("a",{href:"/",className:"logo-img",onMouseEnter:function(){C(!0),g(!1),f(10)},onMouseLeave:function(){C(!1),g(!0)},style:{transform:"rotate("+t+"deg)"}})),n.createElement("div",{className:"pages"},n.createElement("a",{href:"/articles"},"Articles"),n.createElement("a",{href:"/performances"},"Performances"),n.createElement("a",{href:"/meet-the-team"},"Meet the Team"),n.createElement("a",{href:"/about"},"About")),n.createElement("div",{className:"social-media"},n.createElement("a",{href:"https://www.instagram.com/the_asteria_magazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{className:N(),src:a.Z,alt:"Instagram logo"})),n.createElement("a",{href:"https://www.linkedin.com/company/theasteriamagazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{className:N(),src:i.Z,alt:"LinkedIn logo"})),function(){if("undefined"!=typeof document)return document.location.pathname.includes("settings")?n.createElement("a",{onClick:function(){return window.history.back()},className:"settingsBinder"},n.createElement("img",{className:N()+" settings",src:c,alt:"Back arrow"})):n.createElement("a",{href:"/settings",className:"settingsBinder"},n.createElement("img",{className:N()+" settings",src:o,alt:"Settings gear"}))}())),n.createElement("button",{className:"dark-btn",onClick:function(){"0"===localStorage.getItem("isDark")?(window.localStorage.setItem("isDark","1"),document.body.setAttribute("data-theme","dark"),k(!0)):(localStorage.setItem("isDark","0"),document.body.removeAttribute("data-theme"),k(!1))}},n.createElement("div",{className:"icon "+(I?"invert":"noinvert")})),n.createElement("button",{className:"up-btn",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},"↑")))}},262:function(e,t,r){"use strict";r.d(t,{Z:function(){return he}});var n,a,i,o,c=r(7294),A=r(5697),s=r.n(A),l=r(4839),u=r.n(l),f=r(2993),m=r.n(f),d=r(6494),C=r.n(d),p="bodyAttributes",h="htmlAttributes",g="titleAttributes",Q={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(Q).map((function(e){return Q[e]})),"charset"),T="cssText",E="href",y="http-equiv",w="innerHTML",v="itemprop",S="name",I="property",k="rel",O="src",R="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",K="defer",j="encodeSpecialCharacters",B="onChangeClientState",L="titleTemplate",D=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),P=[Q.NOSCRIPT,Q.SCRIPT,Q.STYLE],F="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},G=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},H=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=_(e,Q.TITLE),r=_(e,L);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=_(e,N);return t||n||void 0},z=function(e){return _(e,B)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[Q.BASE]})).map((function(e){return e[Q.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],A=c.toLowerCase();-1===t.indexOf(A)||r===k&&"canonical"===e[r].toLowerCase()||A===k&&"stylesheet"===e[A].toLowerCase()||(r=A),-1===t.indexOf(c)||c!==w&&c!==T&&c!==v||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],A=C()({},n[c],a[c]);n[c]=A}return e}),[]).reverse()},_=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,A=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,u=e.title,f=e.titleAttributes;Ae(Q.BODY,n),Ae(Q.HTML,a),ce(u,f);var m={baseTag:se(Q.BASE,r),linkTags:se(Q.LINK,i),metaTags:se(Q.META,o),noscriptTags:se(Q.NOSCRIPT,c),scriptTags:se(Q.SCRIPT,s),styleTags:se(Q.STYLE,l)},d={},C={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(C[e]=m[e].oldTags)})),t&&t(),A(e,d,C)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),Ae(Q.TITLE,t)},Ae=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(F),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var A=o[c],s=t[A]||"";r.getAttribute(A)!==s&&r.setAttribute(A,s),-1===a.indexOf(A)&&a.push(A);var l=i.indexOf(A);-1!==l&&i.splice(l,1)}for(var u=i.length-1;u>=0;u--)r.removeAttribute(i[u]);a.length===i.length?r.removeAttribute(F):r.getAttribute(F)!==o.join(",")&&r.setAttribute(F,o.join(","))}},se=function(e,t){var r=document.head||document.querySelector(Q.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===w)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(F,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[M[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case Q.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[F]=!0,a=ue(r,n),[c.createElement(Q.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=le(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case p:case h:return{toComponent:function(){return ue(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[F]=!0,n);return Object.keys(t).forEach((function(e){var r=M[e]||e;if(r===w||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===w||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===P.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},me=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,A=e.scriptTags,s=e.styleTags,l=e.title,u=void 0===l?"":l,f=e.titleAttributes;return{base:fe(Q.BASE,t,n),bodyAttributes:fe(p,r,n),htmlAttributes:fe(h,a,n),link:fe(Q.LINK,i,n),meta:fe(Q.META,o,n),noscript:fe(Q.NOSCRIPT,c,n),script:fe(Q.SCRIPT,A,n),style:fe(Q.STYLE,s,n),title:fe(Q.TITLE,{title:u,titleAttributes:f},n)}},de=u()((function(e){return{baseTag:Z([E,R],e),bodyAttributes:X(p,e),defer:_(e,K),encode:_(e,j),htmlAttributes:X(h,e),linkTags:J(Q.LINK,[k,E],e),metaTags:J(Q.META,[S,b,y,I,v],e),noscriptTags:J(Q.NOSCRIPT,[w],e),onChangeClientState:z(e),scriptTags:J(Q.SCRIPT,[O,w],e),styleTags:J(Q.STYLE,[T],e),title:V(e),titleAttributes:X(g,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),me)((function(){return null})),Ce=(a=de,o=i=function(e){function t(){return x(this,t),q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case Q.SCRIPT:case Q.NOSCRIPT:return{innerHTML:t};case Q.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return W({},n,((t={})[r.type]=[].concat(n[r.type]||[],[W({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case Q.TITLE:return W({},a,((t={})[n.type]=o,t.titleAttributes=W({},i),t));case Q.BODY:return W({},a,{bodyAttributes:W({},i)});case Q.HTML:return W({},a,{htmlAttributes:W({},i)})}return W({},a,((r={})[n.type]=W({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=W({},t);return Object.keys(e).forEach((function(t){var n;r=W({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(H(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case Q.LINK:case Q.META:case Q.NOSCRIPT:case Q.SCRIPT:case Q.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=H(e,["children"]),n=W({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},G(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);Ce.renderStatic=Ce.rewind;var pe="https://asteriamagazine.co.uk",he=function(e){var t=e.seo,r=void 0===t?{}:t,n=[],a="Asteria Magazine";if(null!==r.title&&void 0!==r.title&&""!==r.title&&(a=r.title,n.push({name:"twitter:title",content:r.title}),n.push({name:"og:title",content:r.title}),n.push({itemprop:"name",content:r.title}),n.push({name:"twitter:card",content:"summary_large_image"}),n.push({name:"og:type",content:"website"}),n.push({name:"og:site_name",content:"Asteria Website"}),null!==r.description&&void 0!==r.description&&(n.push({name:"description",content:r.description}),n.push({name:"twitter:description",content:r.description}),n.push({name:"og:description",content:r.description}),n.push({itemprop:"description",content:r.description})),null!==r.image&&void 0!==r.image&&(n.push({name:"image",content:pe+r.image}),n.push({name:"og:image",content:pe+r.image}),n.push({name:"twitter:image",content:pe+r.image}),n.push({itemprop:"image",content:pe+r.image})),null!==r.keywords&&void 0!==r.keywords&&n.push({name:"keywords",content:r.keywords}),null!==r.url&&void 0!==r.url)){var i=r.url;"http"!==i.slice(0,4).toLowerCase()&&(i=pe+i),"/"!==i.slice(i.length-1)&&(i+="/"),n.push({name:"twitter:url",content:i}),n.push({name:"og:url",content:i})}return n.length>0?c.createElement(Ce,{htmlAttributes:{lang:"en"},meta:n,title:a}):null}},357:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r.p+"static/summary_card-a98bc2318fb1138136a78fbb43803f75.png",a={Home:{SEO:{title:"Asteria",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"",image:n}},About:{SEO:{title:"Asteria | About",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"about",image:n}},Articles:{SEO:{title:"Asteria | Articles",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"articles",image:n}},Performances:{SEO:{title:"Asteria | Performances",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"performances",image:n}},MeetTheTeam:{SEO:{title:"Asteria | Meet the Team",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"meet-the-team",image:n}},ProfileDetails:{SEO:{title:"Asteria | Profile",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",image:n}},ArticleDetails:{SEO:{title:"Asteria | Article",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",image:n}},PerformanceDetails:{SEO:{title:"Asteria | Performance",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",image:n}},SliderArticles:{Articles:["2","12","9","6"]},Settings:{SEO:{title:"Asteria | Settings",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"settings",image:n}},Bibliography:{SEO:{title:"Asteria | Bibliographies",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"bibliography",image:n}}}},6016:function(e,t,r){"use strict";t.Z=r.p+"static/Instagram-ff9721125ed9d2cea46ec1f6bc46b7b6.png"},1710:function(e,t,r){"use strict";t.Z=r.p+"static/LinkedIn-032cf8a63be2f0f4d42571a0df1c7b87.png"}}]);
//# sourceMappingURL=7d38d738053469d08f7c17cb4ece90ef7b3d62f6-c6316628c1f233fea5a6.js.map