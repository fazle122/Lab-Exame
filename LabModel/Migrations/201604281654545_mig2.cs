namespace LabModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mig2 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Payments",
                c => new
                    {
                        ID = c.String(nullable: false, maxLength: 128),
                        StudentId = c.String(maxLength: 128),
                        Amount = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Students", t => t.StudentId)
                .Index(t => t.StudentId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Payments", "StudentId", "dbo.Students");
            DropIndex("dbo.Payments", new[] { "StudentId" });
            DropTable("dbo.Payments");
        }
    }
}
