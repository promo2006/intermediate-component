CREATE TABLE [dbo].[AccountSystemServiceRate] (
   [ID] [varchar](100) NOT NULL ,
   [InstallationId] [varchar](100) NOT NULL ,
   [AccountId] [varchar](50) NOT NULL ,
   [SubAccountId] [varchar](50) NULL ,
   [VCC] [varchar](50) NOT NULL ,
   [ApiId] [varchar](50) NULL ,
   [SystemService] [varchar](100) NULL ,
   [RatePerHour] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_AccountSystemServiceRate_RatePerHour] DEFAULT ((0)) ,
   [RatePerSecond] [decimal](18,5) NULL 
      CONSTRAINT [DF_AccountSystemServiceRate_RatePerSecond] DEFAULT ((0)) ,
   [RatePerTransaction] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_AccountSystemServiceRate_RatePerTransaction] DEFAULT ((0)) ,
   [CreatedDate] [datetime] NULL 
      CONSTRAINT [DF_AccountSystemServiceRate_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_AccountSystemServiceRate] PRIMARY KEY CLUSTERED ([ID])
)


GO
