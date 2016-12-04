interface ITask {
    "odata.type": string;
    "odata.id": string;
    "odata.etag": string;
    "odata.editLink": string;
    FileSystemObjectType: number;
    Id: number;
    ServerRedirectedEmbedUrl: string;
    ID: number;
    ContentTypeId: string;
    Title: string;
    Modified: Date;
    Created: Date;
    AuthorId: number;
    EditorId: number;
    OData__UIVersionString: string;
    Attachments: boolean;
    GUID: string;
    PredecessorsId: any[];
    Priority: string;
    Status: string;
    PercentComplete?: any;
    AssignedToId: number;
    AssignedToStringId: string;
    TaskGroupId?: any;
    TaskGroupStringId?: any;
    Body?: any;
    StartDate: Date;
    DueDate?: any;
    RelatedItems?: any;
}

export default ITask;