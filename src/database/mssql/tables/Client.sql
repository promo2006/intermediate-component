CREATE TABLE [dbo].[Client] (
   [ClientId] [varchar](50) NOT NULL ,
   [ClientName] [varchar](50) NULL ,
   [CreatedDate] [datetime] NULL 
      CONSTRAINT [DF_Client_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_Client] PRIMARY KEY CLUSTERED ([ClientId])
)


GO
