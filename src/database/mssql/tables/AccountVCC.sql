CREATE TABLE [dbo].[AccountVCC] (
   [InstallationId] [varchar](100) NOT NULL ,
   [AccountId] [varchar](50) NOT NULL ,
   [SubAccountId] [varchar](50) NULL ,
   [VCC] [varchar](50) NOT NULL ,
   [TranscriptionRatePerHour] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_AccountVCC_TranscriptionRatePerHour] DEFAULT ((0)) ,
   [TranscriptionRatePerSecond] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_AccountVCC_TranscriptionRatePerSecond] DEFAULT ((0)) ,
   [SemanticAnalysisRatePerTransaction] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_AccountVCC_SemanticAnalysisRatePerTransaction] DEFAULT ((0)) ,
   [CognitiveAnalysisRatePerTransaction] [decimal](18,5) NOT NULL 
      CONSTRAINT [DF_AccountVCC_CognitiveAnalysisRatePerTransaction] DEFAULT ((0)) ,
   [CreatedDate] [datetime] NULL 
      CONSTRAINT [DF_AccountVCC_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_AccountVCC] PRIMARY KEY CLUSTERED ([InstallationId], [AccountId], [VCC])
)


GO
