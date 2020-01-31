CREATE TABLE [dbo].[Domain] (
   [Domain] [varchar](50) NOT NULL ,
   [Description] [varchar](200) NULL ,
   [Client] [varchar](50) NULL ,
   [HasHttps] [bit] NULL   ,
   [ContentPort] [varchar](50) NULL ,
   [Prefix] [varchar](100) NULL ,
   [IsMainDomain] [bit] NULL   ,
   [IsContentDomain] [bit] NULL   ,
   [ContentDefaultRedirect] [varchar](50) NULL ,
   [IsDistributedService] [bit] NULL   ,
   [AssociatedDistributedService] [varchar](50) NULL ,
   [CustomCode] [varchar](max) NULL ,
   [CreatedDate] [datetime] NULL 
      CONSTRAINT [DF_Domain_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_Domain_1] PRIMARY KEY CLUSTERED ([Domain])
)


GO
