CREATE TABLE [dbo].[AccountBalanceMovement] (
   [InstallationId] [varchar](100) NOT NULL ,
   [AccountId] [varchar](50) NOT NULL ,
   [AccountMovementId] [varchar](50) NOT NULL ,
   [MovementType] [varchar](5) NOT NULL ,
   [Amount] [decimal](18,5) NULL  ,
   [Enabled] [bit] NULL   ,
   [CreatedDate] [datetime] NULL 
      CONSTRAINT [DF_AccountBalanceMovement_CreatedDate] DEFAULT (getutcdate())  ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_AccountMovement] PRIMARY KEY CLUSTERED ([InstallationId], [AccountId], [AccountMovementId])
)


GO
