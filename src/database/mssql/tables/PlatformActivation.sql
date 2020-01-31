CREATE TABLE [dbo].[PlatformActivation] (
   [InstallationId] [varchar](50) NOT NULL ,
   [ActivationDate] [datetime] NULL   ,
   [ExpirationDate] [datetime] NULL   ,
   [CreatedDate] [datetime] NULL 
      CONSTRAINT [DF_PlatformActivation_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   
)


GO
