
interface IrisData {
    config: {};
    Capabilities: Capability[];
   }
  
  export interface Capability {
      Type: string;
      Name: string;
      InternalId: string;
      CreatedBy: string;
      CreatedTimestamp: string;
      ModifiedBy: string;
      ModifiedTimestamp: string;
      ProtectfromDelete: boolean;
      Filtered: boolean;
      Children: Level1sChild[]
   }
  
  export interface Level1sChild {
      Type: string;
      Name: string;
      Description: string;
      InternalId: string;
      CreatedBy: string;
      CreatedTimestamp: string;
      ModifiedBy: string;
      ModifiedTimestamp: string;
      ProtectfromDelete: boolean;
      Filtered: boolean;
      Attributes: Attrib[],
      Children: Level2sChild[]
      Comments: Comment[]
   }
  
   interface Attrib {
    AttributeName: string;
    AttributeValue: string;
  
   }
  
   interface Comment {
    CommentingUser: string;
    Comment: string;
    CommentDate: string;
    CommentArchived: boolean
   }
  
   export interface Level2sChild {
    Type: string;
    Name: string;
    Description: string;
    InternalId: string;
    CreatedBy: string;
    CreatedTimestamp: string;
    ModifiedBy: string;
    ModifiedTimestamp: string;
    Filtered: boolean;
    CapEnablesStageRelationship: any[],
    Attributes: Attrib[],
    Children: Level2sChild[]
    Comments: Comment[]
  
   }