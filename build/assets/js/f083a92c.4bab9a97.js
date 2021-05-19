(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(101)),i={id:"howto-set-ibft",title:"How to set up IBFT"},s={unversionedId:"how-tos/howto-set-ibft",id:"how-tos/howto-set-ibft",isDocsHomePage:!1,title:"How to set up IBFT",description:"Useful information",source:"@site/docs/how-tos/howto-set-ibft.md",slug:"/how-tos/howto-set-ibft",permalink:"/docs/how-tos/howto-set-ibft",editUrl:"https://github.com/0xPolygon/polygon-sdk-docs/docs/how-tos/howto-set-ibft.md",version:"current",sidebar:"develop",previous:{title:"CLI Commands",permalink:"/docs/cli-commands"},next:{title:"How to query operator information",permalink:"/docs/how-tos/howto-query-operator"}},c=[{value:"Useful information",id:"useful-information",children:[]},{value:"Step 1: Initialize data folders for IBFT",id:"step-1-initialize-data-folders-for-ibft",children:[]},{value:"Step 2: Generate an IBFT genesis file with the previous accounts as validators",id:"step-2-generate-an-ibft-genesis-file-with-the-previous-accounts-as-validators",children:[]},{value:"Step 3: Run all the clients",id:"step-3-run-all-the-clients",children:[]},{value:"Step 3: Monitor node activity",id:"step-3-monitor-node-activity",children:[]}],l={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"useful-information"},"Useful information"),Object(o.b)("p",null,"For a better understanding of some commands that will be used later on, it is recommended that you go over\nthe ",Object(o.b)("a",{parentName:"p",href:"/docs/cli-commands"},"CLI Commands"),", before diving deeper into the examples below."),Object(o.b)("p",null,"The main Polygon SDK version is located on the ",Object(o.b)("strong",{parentName:"p"},"develop")," branch, and is considered to be a stable version of the SDK,\nwhile other branches are mid-feature implementations."),Object(o.b)("p",null,"The technologies mentioned in the examples are covered in their corresponding modules in the documentation."),Object(o.b)("p",null,"The how-to guides assume you have a working installation of Golang running on your machine, with Go added to the $PATH variable."),Object(o.b)("p",null,"This example will go over the basics of starting multiple nodes, and demonstrate how the nodes interact between each other."),Object(o.b)("h2",{id:"step-1-initialize-data-folders-for-ibft"},"Step 1: Initialize data folders for IBFT"),Object(o.b)("p",null,"In order to get up and running with IBFT, you need to initialize some data folders:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"go run main.go ibft init --data-dir test-chain-1\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"go run main.go ibft init --data-dir test-chain-2\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"go run main.go ibft init --data-dir test-chain-3\n")),Object(o.b)("h2",{id:"step-2-generate-an-ibft-genesis-file-with-the-previous-accounts-as-validators"},"Step 2: Generate an IBFT genesis file with the previous accounts as validators"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"go run main.go genesis --consensus ibft --ibft-validators-prefix-path test-chain-\n")),Object(o.b)("p",null,"What this command does:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"consensus")," flag sets the consensus to IBFT"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"--ibft-validators-prefix-path")," sets the prefix folder path to the one specified which IBFT in Polygon SDK can use.\nThis directory is used to house the ",Object(o.b)("strong",{parentName:"li"},"consensus")," folder, where the validator's private key is kept. The validator's PK\nis needed in order to build the genesis file")),Object(o.b)("h2",{id:"step-3-run-all-the-clients"},"Step 3: Run all the clients"),Object(o.b)("p",null,"To run the ",Object(o.b)("strong",{parentName:"p"},"first")," client:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"go run main.go server --data-dir ./test-chain-1 --chain genesis.json --grpc :10000 --libp2p :10001 --jsonrpc :10002 --seal\n")),Object(o.b)("p",null,"To run the ",Object(o.b)("strong",{parentName:"p"},"second")," client:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"go run main.go server --data-dir ./test-chain-2 --chain genesis.json --grpc :20000 --libp2p :20001 --jsonrpc :20002 --seal\n")),Object(o.b)("p",null,"To run the ",Object(o.b)("strong",{parentName:"p"},"third")," client:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"go run main.go server --data-dir ./test-chain-3 --chain genesis.json --grpc :30000 --libp2p :30001 --jsonrpc :30002 --seal\n")),Object(o.b)("p",null,"To briefly go over what has been done so far:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The directory for the client data has been specified to be ",Object(o.b)("strong",{parentName:"li"},"./test-chain-","*")),Object(o.b)("li",{parentName:"ul"},"The GRPC server has been started on ports ",Object(o.b)("strong",{parentName:"li"},"10000"),", ",Object(o.b)("strong",{parentName:"li"},"20000")," and ",Object(o.b)("strong",{parentName:"li"},"30000"),", respectively"),Object(o.b)("li",{parentName:"ul"},"The libp2p server has been started on ports ",Object(o.b)("strong",{parentName:"li"},"10001"),", ",Object(o.b)("strong",{parentName:"li"},"20001")," and ",Object(o.b)("strong",{parentName:"li"},"30001"),", respectively"),Object(o.b)("li",{parentName:"ul"},"The JSON-RPC server has been started on ports ",Object(o.b)("strong",{parentName:"li"},"10002"),", ",Object(o.b)("strong",{parentName:"li"},"20002")," and ",Object(o.b)("strong",{parentName:"li"},"30002"),", respectively"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"seal")," flag means that the node being started is going to participate in block sealing"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"chain")," flag specifies which genesis file should be used for chain configuration")),Object(o.b)("p",null,"The structure of the genesis file is covered in the ",Object(o.b)("a",{parentName:"p",href:"/docs/cli-commands"},"CLI Commands")," section."),Object(o.b)("p",null,"After running the previous commands, you have set up a 3 client IBFT network, capable of sealing blocks\nand recovering from node failure."),Object(o.b)("h2",{id:"step-3-monitor-node-activity"},"Step 3: Monitor node activity"),Object(o.b)("p",null,"Now that you've set up at least 1 running client, you can monitor the information that passes through,\nsuch as forks and reorgs, using the ",Object(o.b)("strong",{parentName:"p"},"monitor")," command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"go run main.go monitor --address localhost:20000\n")),Object(o.b)("p",null,"The above command will start monitoring blockchain event activity on the client that's running on port ",Object(o.b)("em",{parentName:"p"},"20000")))}b.isMDXComponent=!0}}]);