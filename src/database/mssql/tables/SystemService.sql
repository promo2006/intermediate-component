CREATE TABLE [dbo].[SystemService] (
   [SystemServiceId] [varchar](50) NOT NULL ,
   [SystemServiceName] [varchar](50) NULL ,
   [CreatedDate] [datetime] NOT NULL 
      CONSTRAINT [DF_SystemService_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_SystemService] PRIMARY KEY CLUSTERED ([SystemServiceId])
)


GO
