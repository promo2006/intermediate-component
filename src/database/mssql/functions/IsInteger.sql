SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE FUNCTION [dbo].[IsInteger](@Value Varchar(18))
RETURNS Bit
AS 
BEGIN
  
  RETURN ISNULL(
     (SELECT CASE WHEN CHARINDEX('.', @Value) > 0 
                  THEN CASE WHEN CONVERT(Int, PARSENAME(@Value, 1)) <> 0
                            THEN 0
                            ELSE 1
                            END
                  ELSE 1
                  END
      WHERE ISNUMERIC(@Value + 'e0') = 1), 0)

END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
