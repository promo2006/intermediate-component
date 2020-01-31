CREATE TABLE [dbo].[Account] (
   [PlatformHash] [varchar](100) NULL ,
   [ID] [varchar](100) NOT NULL ,
   [InstallationId] [varchar](100) NULL ,
   [AccountId] [varchar](50) NOT NULL ,
   [SubAccountId] [varchar](50) NULL ,
   [User] [varchar](50) NOT NULL ,
   [Token] [varchar](50) NOT NULL ,
   [AccountLevel] [int] NOT NULL   ,
   [TranscriptionRatePerHour] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_Account_TranscriptionRatePerHour] DEFAULT ((0)) ,
   [TranscriptionRatePerSecond] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_Account_TranscriptionRatePerSecond] DEFAULT ((0)) ,
   [SemanticAnalysisRatePerTransaction] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_Account_SemanticAnalysisRatePerTransaction] DEFAULT ((0)) ,
   [CognitiveAnalysisRatePerTransaction] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_Account_CognitiveAnalysisRatePerTransaction] DEFAULT ((0)) ,
   [Enabled] [bit] NOT NULL 
      CONSTRAINT [DF_Account_Enabled] DEFAULT ((1))  ,
   [CreatedDate] [datetime] NULL 
      CONSTRAINT [DF_Account_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED ([ID])
)


GO
