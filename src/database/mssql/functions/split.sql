SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO

CREATE FUNCTION [dbo].[split](
    @delimited NVARCHAR(MAX),
    @delimiter NVARCHAR(100)
) RETURNS @t TABLE (Id INT IDENTITY(1,1), Value NVARCHAR(MAX))
AS
BEGIN
    DECLARE @xml XML
    SET @xml = N'<t>' + REPLACE(@delimited,@delimiter,'</t><t>') + '</t>'

    INSERT INTO @t(Value)
    SELECT  r.value('.','varchar(MAX)') as item
    FROM  @xml.nodes('/t') as records(r)
    RETURN
END

GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
