CREATE TABLE [dbo].[AccountBalance] (
   [PlatformHash] [varchar](100) NOT NULL ,
   [ID] [varchar](100) NOT NULL 
      CONSTRAINT [DF_AccountBalance_ID] DEFAULT (newid()),
   [InstallationId] [varchar](100) NULL ,
   [AccountId] [varchar](50) NOT NULL ,
   [SubAccountId] [varchar](50) NULL ,
   [SystemService] [varchar](50) NOT NULL ,
   [CountableBalance] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_AccountBalance_CountableBalance] DEFAULT ((0)) ,
   [AvailableBalance] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_AccountBalance_AvailableBalance] DEFAULT ((0)) ,
   [RetainedBalance] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_AccountBalance_RetainedBalance] DEFAULT ((0)) ,
   [IsLocked] [bit] NOT NULL 
      CONSTRAINT [DF_AccountBalance_IsLocked] DEFAULT ((0))  ,
   [CreatedDate] [datetime] NULL 
      CONSTRAINT [DF_AccountBalance_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_AccountBalance] PRIMARY KEY CLUSTERED ([ID])
)


GO
