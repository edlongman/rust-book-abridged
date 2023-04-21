"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[2204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={},o="10.1 - Generic Data Types",l={unversionedId:"ch10/ch10-01-generic-data-types",id:"ch10/ch10-01-generic-data-types",title:"10.1 - Generic Data Types",description:"In Function Definitions",source:"@site/docs/ch10/ch10-01-generic-data-types.md",sourceDirName:"ch10",slug:"/ch10/ch10-01-generic-data-types",permalink:"/rust-book-abridged/ch10/ch10-01-generic-data-types",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch10/ch10-01-generic-data-types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"10 - Generic Types, Traits, and Lifetimes",permalink:"/rust-book-abridged/category/10---generic-types-traits-and-lifetimes"},next:{title:"10.2 - Traits: Defining Shared Behavior",permalink:"/rust-book-abridged/ch10/ch10-02-traits"}},s={},c=[{value:"In Function Definitions",id:"in-function-definitions",level:2},{value:"In Struct Definitions",id:"in-struct-definitions",level:2},{value:"In Method Definitions",id:"in-method-definitions",level:2},{value:"In Enum Definitions",id:"in-enum-definitions",level:2},{value:"Performance of Code Using Generics",id:"performance-of-code-using-generics",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"101---generic-data-types"},"10.1 - Generic Data Types"),(0,a.kt)("h2",{id:"in-function-definitions"},"In Function Definitions"),(0,a.kt)("p",null,"We can use generics to define a function that can accept different data types. This is just like generics in TypeScript, Java, and Go, or like template functions in C++."),(0,a.kt)("p",null,"Here's an example of a function to find the largest number in a list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn largest_i32(list: &[i32]) -> &i32 {\n    let mut largest = &list[0];\n\n    for item in list {\n        if item > largest {\n            largest = item;\n        }\n    }\n\n    largest\n}\n\n\nfn main() {\n    let number_list = vec![34, 50, 25, 100, 65];\n\n    let result = largest_i32(&number_list);\n    println!("The largest number is {}", result);\n}\n')),(0,a.kt)("p",null,"The problem with this function is that it can only accept a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"i32"),". If we wanted to write a version of this for ",(0,a.kt)("inlineCode",{parentName:"p"},"char")," or for ",(0,a.kt)("inlineCode",{parentName:"p"},"u64"),", the function signature would change, but the code in body would be identical. We can use generics here to write the function to accept any number by changing the function signature to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// This doesn't QUITE work...\nfn largest<T>(list: &[T]) -> &T {\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<T>")," after the function name tells the compiler this is a generic function, so anywhere inside the function body where there's a ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),", we'll replace it with some concrete type when the function is actually called. (Or actually, when it's compiled. We'll compile one version of this function for each type it is used with.)"),(0,a.kt)("p",null,"If you actually try to compile the above though, ",(0,a.kt)("inlineCode",{parentName:"p"},"rustc")," will complain. The problem is that ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," here could be an ",(0,a.kt)("inlineCode",{parentName:"p"},"i32")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"u64"),"... but it could also be a ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," or some other arbitrary type. Inside the function we do ",(0,a.kt)("inlineCode",{parentName:"p"},"item > largest")," - how would we decide if one struct was larger than another? We need to restrict what kinds of types can be used in place of T with a ",(0,a.kt)("em",{parentName:"p"},"trait bound"),". In this case we only want to allow T to be a type that implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"str::cmp::PartialOrd")," trait. Types that implement this trait can be compared to each other:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn largest<T: PartialOrd>(list: &[T]) -> &T {\n")),(0,a.kt)("p",null,"Why a single letter ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," for the generic type? It doesn't have to be; you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"fn largest<Number>...")," instead, and it will work. But in almost every language that supports something like generics, the convention is to use a single character."),(0,a.kt)("h2",{id:"in-struct-definitions"},"In Struct Definitions"),(0,a.kt)("p",null,"Generics aren't just for functions, we can also use them in structs. Here we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," struct which has an x and a y. Both x and y are type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),", so they must both be the same type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct Point<T> {\n    x: T,\n    y: T,\n}\n\nfn main() {\n    let integer = Point { x: 5, y: 10 };\n    let unsigned: Point<u32> = Point { x: 9, y: 20 };\n    let float = Point { x: 1.0, y: 4.0 };\n\n    // This won't work, because we're trying to use two different types\n    let wont_work = Point { x: 5, y: 4.0 };\n}\n")),(0,a.kt)("p",null,"If we want to support mixed types we can, but we'll have to redefine the struct to allow it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct MultiPoint<T, U> {\n    x: T,\n    y: U,\n}\n")),(0,a.kt)("h2",{id:"in-method-definitions"},"In Method Definitions"),(0,a.kt)("p",null,"If we create a struct with generic properties, it makes sense that we'll have to define methods that are generic too:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Point<T> {\n    x: T,\n    y: T,\n}\n\nimpl<T> Point<T> {\n    pub fn x(&self) -> &T {\n        &self.x\n    }\n}\n")),(0,a.kt)("p",null,"Note the ",(0,a.kt)("inlineCode",{parentName:"p"},"impl<T>")," - we need the ",(0,a.kt)("inlineCode",{parentName:"p"},"<T>")," here to let the compiler know that ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," is not a concrete type. Why? Because we can also declare methods only on specific concrete versions of a generic struct. This will add a ",(0,a.kt)("inlineCode",{parentName:"p"},"distance_from_origin")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Point<f32>"),", but not to any other Point, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Point<u32>"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Point<f32> {\n    fn distance_from_origin(&self) -> f32 {\n        (self.x.powi(2) + self.y.powi(2)).sqrt()\n    }\n}\n")),(0,a.kt)("p",null,"We can also add generics to a method that are not related to the generics on the struct:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'struct Point<X1, Y1> {\n    x: X1,\n    y: Y1,\n}\n\nimpl<X1, Y1> Point<X1, Y1> {\n    // Note that mixup takes `X2` and `Y2` generic types,\n    // in addition to `X1` and `Y1` from the struct!\n    fn mixup<X2, Y2>(self, other: Point<X2, Y2>) -> Point<X1, Y2> {\n        Point {\n            x: self.x,\n            y: other.y,\n        }\n    }\n}\n\nfn main() {\n    let p1 = Point { x: 5, y: 10.4 };\n    let p2 = Point { x: "Hello", y: \'c\' };\n\n    let p3 = p1.mixup(p2);\n\n    println!("p3.x = {}, p3.y = {}", p3.x, p3.y);\n}\n')),(0,a.kt)("h2",{id:"in-enum-definitions"},"In Enum Definitions"),(0,a.kt)("p",null,"We've already seen a few enums that use generics such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Option<T>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Result<T, E>"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"enum Option<T> {\n    Some(T),\n    None,\n}\n\nenum Result<T, E> {\n    Ok(T),\n    Err(E),\n}\n")),(0,a.kt)("h2",{id:"performance-of-code-using-generics"},"Performance of Code Using Generics"),(0,a.kt)("p",null,"Much like C++ template functions, Rust generics are implemented using ",(0,a.kt)("em",{parentName:"p"},"monomorphization"),", which is a fancy way of saying it generates a copy of each generic type at compile time, one copy for each type it was used with."),(0,a.kt)("p",null,"In other words, if we go back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fn largest<T>(list: &[T]) -> &T")," we started this section with, if you were to call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    let number_list = vec![34, 50, 25, 100, 65];\n    let result = largest(&number_list);\n\n    let char_list = vec!['y', 'm', 'a', 'q'];\n    let result = largest(&char_list);\n")),(0,a.kt)("p",null,"then internally Rust would actually compile two different functions, a ",(0,a.kt)("inlineCode",{parentName:"p"},"largest<i32>")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"largest<char>"),". This means generic have no runtime performance impact, but they do make your executable larger."))}d.isMDXComponent=!0}}]);