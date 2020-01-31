CREATE TABLE [dbo].[UserHistory] (
   [ID] [int] NOT NULL  
      IDENTITY (1,1) ,
   [UserId] [varchar](50) NULL ,
   [UserRole] [varchar](50) NULL ,
   [Event] [varchar](50) NULL ,
   [EventDate] [datetime] NULL   ,
   [EventDetail] [varchar](200) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_UserHistory] PRIMARY KEY CLUSTERED ([ID])
)


GO
