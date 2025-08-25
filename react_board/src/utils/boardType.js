const boardType = (type)=> {

    switch (type) {
        case "01":
            return "자유";
        case "02":
            return "질문"
        case  "03":
            return "Q&A";
        case "04":
            return  "게임";
        case "05":
            return "아이돌";
        default :
            return "잘못된 접근";

    }
}
export  default boardType;


export  const boardTypeList = [
    {
        type: "01",
        typeName: '자유'
    },
    {
        type: "02",
        typeName: '질문'
    },
    {
        type: "03",
        typeName: 'QnA'
    },
    {
        type: "04",
        typeName: '게임'
    },
    {
        type:"05",
        typeName: '아이돌'
    },
]