
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

export interface LoginUserSuccess{
    token:string
   role:string 
   userName:string;
    }




export  interface questions {

    questionId:string
    userId:string
   title:string
    body:string
    tag:string
    isDeleted: number
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
    total_votes:number

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


