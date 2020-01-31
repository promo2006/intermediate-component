CREATE TABLE [dbo].[PlatformLicense] (
   [PlatformHash] [varchar](100) NOT NULL ,
   [InstallationId] [varchar](100) NULL ,
   [Product] [varchar](50) NOT NULL ,
   [TotalLicense] [int] NOT NULL 
      CONSTRAINT [DF_PlatformLicense_AvailableLicense] DEFAULT ((0))  ,
   [AssignedLicense] [int] NOT NULL 
      CONSTRAINT [DF_PlatformLicense_UsedLicense] DEFAULT ((0))  ,
   [ExpirationDate] [date] NULL   ,
   [IsLocked] [bit] NULL 
      CONSTRAINT [DF_PlatformLicense_IsLocked] DEFAULT ((0))  ,
   [CreatedDate] [datetime] NULL 
      CONSTRAINT [DF_PlatformLicense_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_PlatformLicense] PRIMARY KEY CLUSTERED ([PlatformHash], [Product])
)


GO
