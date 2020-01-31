CREATE TABLE [dbo].[PlatformData] (
   [PlatformHash] [varchar](100) NOT NULL ,
   [InstallationId] [varchar](100) NULL ,
   [ClientName] [varchar](50) NULL ,
   [ClientContactName] [varchar](250) NULL ,
   [ClientContactEmail] [varchar](100) NULL ,
   [TranscriptionRatePerHour] [decimal](18,5) NULL 
      CONSTRAINT [DF_PlatformData_TranscriptionRatePerHour] DEFAULT ((0)) ,
   [TranscriptionRatePerSecond] [decimal](18,5) NULL 
      CONSTRAINT [DF_PlatformData_TranscriptionRatePerSecond] DEFAULT ((0)) ,
   [SemanticAnalysisRatePerTransaction] [decimal](18,5) NULL 
      CONSTRAINT [DF_Table_1_SemanticAnaysisRatePerTransaction] DEFAULT ((0)) ,
   [CognitiveAnalysisRatePerTransaction] [decimal](18,5) NULL 
      CONSTRAINT [DF_PlatformData_CognitiveAnalysisRatePerTransaction] DEFAULT ((0)) ,
   [CreatedDate] [datetime] NULL 
      CONSTRAINT [DF_PlatformData_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_PlatformData] PRIMARY KEY CLUSTERED ([PlatformHash])
)


GO
