CREATE TABLE [dbo].[Role] (
   [ID] [varchar](50) NOT NULL ,
   [Description] [varchar](50) NULL ,
   [CreatedDate] [datetime] NULL   ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED ([ID])
)


GO
