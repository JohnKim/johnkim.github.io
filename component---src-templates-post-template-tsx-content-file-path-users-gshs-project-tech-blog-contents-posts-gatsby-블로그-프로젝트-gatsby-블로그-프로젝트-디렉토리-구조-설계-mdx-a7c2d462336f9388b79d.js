"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[950],{5480:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return g}});var l=n(9626),r=n(7294);function a(e){var t=Object.assign({p:"p",h2:"h2",a:"a",div:"div",code:"code",pre:"pre",ol:"ol",li:"li",strong:"strong",blockquote:"blockquote",em:"em",h3:"h3"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"소프트웨어 개발에 앞서, 아키텍처 설계를 하고 Framework 를 선정하는 작업 이후에는 프로젝트 디렉토리 구조를 어떤 기준으로 구성할지 고민해야 할 것이다."),"\n",r.createElement(t.p,null,"디렉토리 구조는 아키텍처 설계 또는 프레임워크에 따라 구조가 정해지게 되는데, 이번 블로그 프로젝트에서는 Gatsby 를 사용하기 때문에 이에 맞는 디렉토리 구조가 설계 되어야 할 것이다."),"\n",r.createElement(t.p,null,"우선 Gatsby 기반의 프로젝트에서 구성해야 하는 기본적인 디렉토리 구조를 살펴본 후,\n이번 글의 주제인 화면을 구성하는 React Component 파일 디렉토리 구조를 Feature-based 로 할지 Screen-based 로 한지 에 대한 고민을 해보도록 하자."),"\n",r.createElement(t.h2,{id:"gatsby-기본-디렉토리-구조",style:{position:"relative"}},r.createElement(t.a,{href:"#gatsby-%EA%B8%B0%EB%B3%B8-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0","aria-label":"gatsby 기본 디렉토리 구조 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Gatsby 기본 디렉토리 구조"),"\n",r.createElement(t.p,null,"사실 Gatsby 기반이라고 해서 정해진 디렉토리 구조가 있는 것은 아니다.\nGatsby 프레임워크를 기반인 경우, 설정(",r.createElement(t.code,null,"/gatsby-config.ts"),")이나, 빌드(",r.createElement(t.code,null,"/gatsby-node.ts"),", ",r.createElement(t.code,null,"/gatsby-browser.ts")," 등 )를 위한 파일들은 프로젝트 최상위 디렉토리에 위치하는 것 이외에, 별도로 고려해야 할 것은 거의 없다.\nGatsby 가 Default 로 참조하는 폴더가 몇가지 있으며, 이는 아래와 같다."),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"├── src\n|  ├── pages            // 1. 페이지 폴더로 향후 Markup 으로 변환\n|  |  ├── 404.tsx\n|  |  ├── index.tsx\n|  |  └── ...\n|\n├── static              // 2. JS, CSS, 이미지 등 static 파일\n|  └── ...\n|\n├── gatsby.config.ts    // 3. Gatsby 설정파일로 Plugin 을 추가\n├── gatsby.node.ts      // 4. Gatsby 에서 Build 하는 과정에 필요한 로직 추가\n├── gatsby.browser.ts   // 5. 전역에 필요한 CSS, JS 등을 Import\n├── package.json\n└── ...\n")),"\n",r.createElement(t.p,null,"우선 TypeScript 로 작성되었기 때문에 확장자는 ",r.createElement(t.code,null,"*.ts"),"와 ",r.createElement(t.code,null,"*.tsx"),"(React JSX Element 를 포함한 파일) 로 되어 있고, 위의 폴더 구조에서 TypeScript 설정이나 Lint 관련된 파일을 다른 프로젝트에서도 많이 볼 수 있으므로 따로 표기하지 않았다."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.code,null,"/src/pages")," : 이 디렉토리에 있는 ",r.createElement(t.code,null,"*.jsx"),", ",r.createElement(t.code,null,"*.tsx")," 파일은 Static Markup 파일로 변환되어 웹페이지 링크로 접속 가능해 진다. 이 중 ",r.createElement(t.code,null,"404.tsx")," 파일은 페이지 링크에 없는 접속일 경우 보여지는 Exception 페이지로 자동 설정 된다."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.code,null,"/static")," : JS, CSS, 이미지 등 static 파일들을 넣을 수 있는 디렉토리이며, 파일 경로는 그대로 웹페이지에서 접속이 가능하다. ",r.createElement(t.code,null,"/src")," 디렉토리 안에 있는 tsx 파일에서도 import 가능하며, 자동으로 minified & compressed 되게 된다."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.code,null,"/gatsby.config.ts")," : Gatsby 설정 파일이며, 적용하고자 하는 Plugin을 추가할때 이 파일에 작성해야 한다."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.code,null,"/gatsby.browser.ts")," : Markup 으로 랜더링될 때 전역에 필요한 font 파일이나 CSS, JS 를 import 하는데 사용된다."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.code,null,"/gatsby.node.ts")," : Gatsby 가 Build 하는 과정에 필요한 작업을 수행하도록 한다. GraphQL 로 접근하는 데이터 스키마를 새로 구성하거나 데이터를 입력하는 작업과, MDX 파일을 Markup 으로 만들기 위한 작업을 하도록 개발하는 파일로, Gatsby API 를 사용하여 로직을 구현하게 된다."),"\n"),"\n"),"\n",r.createElement(t.h2,{id:"react-component-파일-디렉토리-구조",style:{position:"relative"}},r.createElement(t.a,{href:"#react-component-%ED%8C%8C%EC%9D%BC-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0","aria-label":"react component 파일 디렉토리 구조 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"React Component 파일 디렉토리 구조"),"\n",r.createElement(t.p,null,"화면을 구성하는 React Component 를 화면 UI 즉 Screen 기준으로 폴더를 생성하는것이 맞는가? 아니면, Feature 기준으로 폴더를 생성하는 것이 맞는가에 대한 고민이다."),"\n",r.createElement(t.p,null,"결론적으로 개인적인 의견이지만, ",r.createElement(t.strong,null,"Feature based struction 가 맞다")," 고 생각한다.\n물론 한명이 개발한 소규모 프로젝트라면, Screen based structure 가 직관적이기에 적합할 수 있겠으나 향후 확장을 고려하거나 다수의 개발자가 참여하는 프로젝트라면, Feature 기준으로 폴더를 생성하는것이 좋겠다."),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"feature 를 무엇이라고 정의하고 읽어야 하는가?"),"\n",r.createElement(t.p,null,"'기능' 또는 '특징' 이라고 할 수 있겠다. Machine learning 에서는 데이터의 '특징' 이라는 말로 명확하게 의미 전달이 되지만, 일반적인 소프트웨어에서는 '서비스의 기능' 정도이지 않을까 생각한다.\n이는 function 의 뜻하고도 혼선이 있어, 이글에서는 한글로 번역하지 않고 feature 라고 부르기로 했다. ",r.createElement(t.em,null,"Front-end 개발자들간의 커뮤니케이션에는 문제 없을 수 있으나 ML 엔지니어나 서비스기획, PO와의 커뮤니케이션에서 분명 이슈가 있다.")),"\n",r.createElement(t.p,null,"내가 동료분들께 가능하다면 OS 부터 개발도구까지 영문 버전으로 사용하자는 이유도 바로 이런 혼선 때문이기도 하다.\n예를 들어, Git-flow 에서 feature 를 추가하는 브랜치 생성의 한글 메뉴명이 '기능 추가하기' 인것을 보면, 이 '기능'이 function 인지 feature 인지 의미전달이 명확하지 않아 혼선이 있을 수 밖에 없다. 심지어 'funtion' 은 함수라고도 부르는데 말이다.\n게다가, 우리 회사에서는 최근 Offshore 해외 개발자와 pair programming 해야하는 상황에서는 한글로 된 OS나 개발툴을 사용할 이유가 더욱 없어졌다."),"\n"),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"UI Component들의 파일 디렉토리 구조를 설계할 때 지켜야할 원칙은, One-way Dependency 이다.")),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"이말은, 특정 디렉토리에 위치한 UI Component 는, 공통 UI Component 를 제외하고는 반드시 같은 디렉토리 또는 하위 디렉토리의 UI Component 만 import 할 수 있다는 것이다.")),"\n",r.createElement(t.p,null,"블로그 프로젝트에서는 ",r.createElement(t.code,null,"/src/components")," 에 UI Component 를 생성하도록 할 것이며, ",r.createElement(t.code,null,"/src/components/common")," 의 UI Component 는 모든 파일에서 import 가능하지만(One-way Dependency 의 예외 영역), 그외 ",r.createElement(t.code,null,"/src/components/*")," 폴더에 있는 파일은 같은 디렉토리 또는 하위 디렉토리의 파일만 import 가능하다는 것이다."),"\n",r.createElement(t.h3,{id:"screen-based-structure",style:{position:"relative"}},r.createElement(t.a,{href:"#screen-based-structure","aria-label":"screen based structure permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Screen based structure"),"\n",r.createElement(t.p,null,"UI 화면을 기준으로 디렉토리를 설계 한다면, 아래와 같을 것이다."),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"└── src\n   ├── components\n   |  ├── common             // 모든 페이지에서 사용하게 되는 공통 Component\n   |  |  ├── header.tsx\n   |  |  └── footer.tsx\n   |  ├── main\n   |  |  ├── index.tsx        // 메인 페이지\n   |  |  └── post-list.tsx    // 메인 페이지에서 사용하는 블로그 포스트 목록 (최신 목록)\n   |  ├── blog\n   |  |  ├── index.tsx        // 블로그 포스트 목록 페이지\n   |  |  └── post-list.tsx    // 블로그 포스트 목록 (전체 블로그 포스트 목록)\n   |  ├── post\n   |  |  ├── index.tsx        // 블로그 포스트 페이지\n   |  |  └── tag-list.tsx     // 블로그 포스트에 포함되어 있는 Tag 목록\n   |  ├── tag\n   |  |  ├── index.tsx        // 블로그 테그 목록 페이지\n   |  |  └── post-list.tsx    // 테그별 블로그 포스트 목록\n   |  └── ...\n   └── ...\n")),"\n",r.createElement(t.p,null,"화면을 기준으로 디렉토리를 생성하게 되면, 중복된 UI Component 가 각 화면 폴더에 중복해서 들어가야 할 것이다."),"\n",r.createElement(t.p,null,"위에서 보는 바와 같이 메인 페이지, 블로그 포스트 목록 페이지, 테그 목록 페이지에서는 '블로그 포스트 목록' UI Component 가 중복해서 필요하다.\n위의 디렉토리 구조는 UI Component 를 상세히 모듈화 하여 표시하지 않았기 때문에 중복되는 구조가 크게 복잡해 보이지 않지만, 실제로 상세히 모듈화 한다면 더욱 중복이 많이 발생하게 될 것이다."),"\n",r.createElement(t.p,null,"이를 해결하기 위해서, 여러 페이지에서 사용해야 하는 UI Component 를 모두 ",r.createElement(t.code,null,"/src/components/comon")," 폴더에 넣어야 한다면, 공통 UI Component 가 상당히 늘어나게 되는 문제가 발생하게 된다."),"\n",r.createElement(t.h3,{id:"feature-based-structure",style:{position:"relative"}},r.createElement(t.a,{href:"#feature-based-structure","aria-label":"feature based structure permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Feature based structure"),"\n",r.createElement(t.p,null,"이제 화면이 아닌 feature 기준으로 디렉토리를 구분한 예시를 살펴보자. 본 블로그 프로젝트 구조도 이와 동일한 구조로 설계되어 있다."),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"└── src\n   ├── components\n   |  ├── common              // 모든 페이지에서 사용하게 되는 공통 Component\n   |  |  ├── header.tsx\n   |  |  └── footer.tsx\n   |  ├── blog\n   |  |  ├── post.tsx         // 블로그 포스트 Component\n   |  |  └── post-list.tsx    // 블로그 포스트 Component로 목록을 구현한 Component\n   |  ├── tag\n   |  |  ├── tag.tsx          // 블로그 테그 Component\n   |  |  └── post-list.tsx    // 블로그 테그 Component로 목록을 구현한 Component\n   |  └── ...\n   ├── templates              // 화면 페이지들\n   |  ├── main-template.tsx\n   |  ├── blog-template.tsx\n   |  ├── post-template.tsx\n   |  ├── tag-template.tsx\n   |  ├── main-template.tsx\n   |  └── ...\n   └── ...\n")),"\n",r.createElement(t.p,null,"위에 구조에서 볼 수 있듯이 ",r.createElement(t.code,null,"/src/components")," 에는 feature 별로 디렉토리를 구분하여 구성하였고, 우리는 ",r.createElement(t.code,null,"/src/templates")," 에는 화면별로 파일을 생성하였다."),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"/src/components/common")," 은 모든 화면 또는 UI Component 에서 접근이 가능하고, feature 별로 구분되다보니 ",r.createElement(t.code,null,"/src/components/blog")," 와 ",r.createElement(t.code,null,"/src/components/tag")," 로 구성된 것을 볼 수 있다."),"\n",r.createElement(t.h2,{id:"결론",style:{position:"relative"}},r.createElement(t.a,{href:"#%EA%B2%B0%EB%A1%A0","aria-label":"결론 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"결론"),"\n",r.createElement(t.p,null,"프로젝트 초기 아키텍처 설계를 하고 Framework 를 선정한 이후, 프로젝트 디렉토리 구조를 어떤 기준으로 구성할지 정해야 한다."),"\n",r.createElement(t.p,null,"소규모 프로젝트 이면서, 향후 확장을 고려할 필요가 없다면, 화면 단위로 디렉토리를 구성해도 문제 될 것은 없지만, 향후 확장을 고려한다면 Feature-based structure로 설계 하는 것이 좋겠다."),"\n",r.createElement(t.p,null,"그리고, Feature-based Structure는 프로젝트 코드의 디렉토리 구조이기도 하지만, Design System 에서도 물론 동일하게 가져가야 하는 기준이 되어야 할 것이다."))}var c=function(e){void 0===e&&(e={});var t=Object.assign({},(0,l.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(a,e)):a(e)},o=n(977),i=n(4043),s=n(9090),m=n(3013),u=n(5975),p=n(3),d=n(8542),E=n(5637),f=n(2534),h=(["32px","16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.15) 0px "+e+" "+e+" 0px"})),function(e){var t=e.data.mdx,n=e.children,a=(0,f.Z)(),c=a.ref,s=a.offsetTop;return(0,o.tZ)(m.Z,null,t.tableOfContents&&t.tableOfContents.items&&(0,o.tZ)(E.Z,{items:t.tableOfContents.items,articleOffset:s}),(0,o.tZ)(i.X6,{as:"h1",variant:"styles.h1"},t.title),t.description&&(0,o.tZ)("p",{sx:{color:"onSurface",my:4,fontSize:[2,3,4]}},t.description),t.tags&&(0,o.tZ)(r.Fragment,null,(0,o.tZ)("div",{sx:{mt:3}},(0,o.tZ)(u.Z,{tags:t.tags}))),(0,o.tZ)("p",{sx:{color:"onSurface",my:3,fontSize:[1,1,1]}},(0,o.tZ)("time",null,t.date),t.timeToRead&&" — ",t.timeToRead&&(0,o.tZ)("span",null,Math.ceil(t.timeToRead)," min read")),(0,o.tZ)(i.iz,null),(0,o.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5]},variant:"layout.content"},ref:c},(0,o.tZ)(l.Zo,{components:d.Z},n)),(0,o.tZ)(p.Z,{post:t}))});function g(e){return r.createElement(h,e,r.createElement(c,e))}var v=function(e){var t=e.data.mdx,n=e.location;return(0,o.tZ)(s.H,{title:t.title,pathname:n.pathname})}},5975:function(e,t,n){var l=n(977),r=n(4043),a=n(7294),c=n(1597);t.Z=function(e){var t=e.tags;return(0,l.tZ)(a.Fragment,null,t&&t.map((function(e,t){return e&&(0,l.tZ)(a.Fragment,{key:e.slug},!!t&&" ",(0,l.tZ)(c.rU,{sx:function(e){var t;return Object.assign({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:"/tags/"+e.slug},(0,l.tZ)(r.Ct,{sx:{px:3,py:1,mr:2,fontSize:2,backgroundColor:"secondary",letterSpacing:"0.003em",borderRadius:"8px"}},e.name)))})))}},8542:function(e,t,n){var l=n(977),r=n(4043),a={Collapsible:function(e){var t=e.summary,n=e.children;return(0,l.tZ)("details",{sx:{px:[2,4]}},(0,l.tZ)("summary",{sx:{color:"secondary",fontWeight:"medium",fontSize:["13px","14px"],cursor:"pointer",">:firstOfType":{display:"inline"}}},t),(0,l.tZ)(r.iz,null),n,(0,l.tZ)(r.iz,null))}};t.Z=a},3:function(e,t){t.Z=function(e){e.post;return null}},5637:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),r=n(977),a=n(4043),c=n(1597),o=function(){var e=l.useState({x:0,y:0}),t=e[0],n=e[1],r=function(){n({y:window.scrollY,x:window.scrollX})};return(0,l.useEffect)((function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}}),[]),t},i=function(e){var t=e.items,n=e.articleOffset,l=o().y;return(0,r.tZ)("div",{sx:Object.assign({},l<n-100?{position:"absolute",top:n}:{position:"fixed",top:"100px"},{left:"85%","@media (max-width: 1410px)":{display:"None"}})},(0,r.tZ)(a.iz,{sx:{mh:0}}),(0,r.tZ)("nav",{sx:{color:"secondary"}},t.map((function(e){return(0,r.tZ)(s,{item:e,key:e.url})}))),(0,r.tZ)(a.iz,{sx:{mh:0}}))},s=function e(t){var n=t.item,a=t.depth,o=void 0===a?0:a;return(0,r.tZ)(l.Fragment,null,(0,r.tZ)(c.rU,{to:""+n.url,title:n.title,sx:function(e){var t;return Object.assign({},null===(t=e.styles)||void 0===t?void 0:t.a,{fontSize:["12px"],color:"secondary",":hover":{color:"heading"}})}},(0,r.tZ)("div",{sx:{marginLeft:3*o}}," ",n.title," ")),n.items&&n.items.map((function(t){return(0,r.tZ)(e,{item:t,depth:o+1,key:t.url})})))}},9090:function(e,t,n){n.d(t,{H:function(){return c}});var l=n(7294),r=n(193),a=n(1597),c=function(e){var t=e.title,n=e.pathname,c=e.description,o=e.canonicalUrl,i=e.children,s=(0,r.Z)(),m=s.title,u=s.siteUrl,p=s.description,d={title:t||m,description:c||p,url:""+u+(n||"")};return l.createElement(l.Fragment,null,l.createElement("title",{title:d.title}),l.createElement("meta",{name:"description",content:d.description}),l.createElement("meta",{property:"og:title",content:d.title}),l.createElement("meta",{property:"og:url",content:d.url}),l.createElement("meta",{property:"og:description",content:d.description}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:d.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:d.title}),l.createElement("meta",{name:"twitter:url",content:d.url}),l.createElement("meta",{name:"twitter:description",content:d.description}),l.createElement("meta",{name:"twitter:image:alt",content:d.description}),l.createElement("meta",{name:"twitter:creator",content:"@johnkim0331"})," ",l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.dq)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.dq)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.dq)("/apple-touch-icon.png")}),l.createElement("title",null,d.title),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:d.title}),l.createElement("meta",{name:"twitter:url",content:d.url}),o?l.createElement("link",{rel:"canonical",href:o}):null,i)}},2534:function(e,t,n){var l=n(7294);t.Z=function(){var e=(0,l.useRef)(null),t=(0,l.useState)(0),n=t[0],r=t[1];return(0,l.useEffect)((function(){var t,n;(n=null===(t=e.current)||void 0===t?void 0:t.offsetTop)&&r(n)}),[]),{ref:e,offsetTop:n}}}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-content-file-path-users-gshs-project-tech-blog-contents-posts-gatsby-블로그-프로젝트-gatsby-블로그-프로젝트-디렉토리-구조-설계-mdx-a7c2d462336f9388b79d.js.map