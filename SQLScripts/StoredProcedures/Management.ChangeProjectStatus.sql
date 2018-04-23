USE [JBO]
GO
/****** Object:  StoredProcedure [Management].[ChangeInstructorStatus]    Script Date: 4/21/2018 9:40:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [Management].[ChangeProjectStatus]
(
	@id INT
	, @isActive BIT
)
AS
BEGIN
	UPDATE Management.Projects
	SET IsActive = @isActive
	WHERE id = @id
END

