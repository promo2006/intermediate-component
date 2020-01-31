CREATE TABLE [dbo].[Platform] (
   [PlatformHash] [varchar](100) NOT NULL ,
   [InstallationId] [varchar](50) NULL ,
   [PublicIP] [varchar](50) NULL ,
   [MacAddress] [varchar](50) NULL ,
   [BaseBoardSerialNumber] [varchar](50) NULL ,
   [IsActivated] [bit] NULL   ,
   [ActivationDate] [datetime] NULL   ,
   [ActivationHash] [varchar](100) NULL ,
   [CreatedDate] [datetime] NULL 
      CONSTRAINT [DF_Platform_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_Platform] PRIMARY KEY CLUSTERED ([PlatformHash])
)


GO
