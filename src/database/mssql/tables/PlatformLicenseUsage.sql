CREATE TABLE [dbo].[PlatformLicenseUsage] (
   [ID] [varchar](100) NOT NULL ,
   [InstallationId] [varchar](100) NOT NULL ,
   [AccountId] [varchar](50) NOT NULL ,
   [SubAccountId] [varchar](50) NULL ,
   [Product] [varchar](50) NOT NULL ,
   [VCC] [varchar](50) NOT NULL ,
   [LicenseActivationDate] [datetime] NULL   ,
   [LicenseExpirationDate] [datetime] NULL   ,
   [CreatedDate] [datetime] NOT NULL 
      CONSTRAINT [DF_PlatformLicenseUsage_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_PlatformLicenseUsage] PRIMARY KEY CLUSTERED ([ID])
)


GO
