
export interface User{
    userId:string
    userName:string
    email:string
    password:string
    emailSent:number
    isDeleted:number
    roles:string
    

    
}


export interface NewUser{
    userName:string
    email:string
    password:string
}
export interface LoginUser{
    email:string
    password:string
}




export interface addUserSuccess{
message:string
}


export interface votesSuccess{
    message:string
    }

export interface LoginUserSuccess{
    token:string
   role:string 
   username:string
   message:string
    }


    export interface NewQuestion{
        title:string
        body:string
       TAGS:string
    }

    export interface addQuestionSuccess{
        message:string
    }




export  interface questions {

    questionsId:string
    userId:string
   title:string
    body:string
    tag:string
    TAGS:[]
    isDeleted: number
    tagNames:string
    tagName:string
 
}


export interface Tag{
    tagId:string
    tagName:string
  }


  export interface answers{      
    answerId:string
    questionsId:string
    body:string
    userId:string
    isPreferred :string
    totalVotes:number
 

}

export interface prefferedSuccess{
    
message:string
}

export interface comments{ 
    commentId: string;
    userId: string;
    questionsId: string;
    answerId: string;
    body: string;
}


export interface votes{ 
    voteId : string;
    answerId: string;
    userId: string;
    upVotes: number;
    downVotes: number;
}


