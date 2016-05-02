namespace LabModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mig3 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Students", "TotalDue");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Students", "TotalDue", c => c.Double(nullable: false));
        }
    }
}
