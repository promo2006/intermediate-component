CREATE TABLE [dbo].[PlatformApi] (
   [InstallationId] [varchar](100) NOT NULL ,
   [Type] [varchar](50) NOT NULL ,
   [ApiId] [varchar](50) NOT NULL ,
   [ApiName] [varchar](50) NULL ,
   [ApiIp] [varchar](50) NULL ,
   [ApiPort] [int] NULL   ,
   [ApiDescription] [varchar](250) NULL ,
   [CreatedDate] [datetime] NOT NULL 
      CONSTRAINT [DF_PlatformApi_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_PlatformApi] PRIMARY KEY CLUSTERED ([InstallationId], [Type], [ApiId])
)


GO
