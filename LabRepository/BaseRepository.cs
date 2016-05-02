using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using LabModel;
using System.Linq.Expressions;

namespace LabRepository
{
    public class BaseRepository<L> where L: Entity
    {
        public LabDBContext DB;

        public BaseRepository(LabDBContext db)
        {
            this.DB = db;
        }

        public virtual IQueryable<L> Filter(
            Expression<Func<L, bool>> filter = null,
            Func<IQueryable<L>, IOrderedQueryable<L>> orderBy = null,
            string includeProperties = "")
        {
            var query = DB.Set<L>().AsQueryable();
            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (!string.IsNullOrWhiteSpace(includeProperties))
            {
                var properties = includeProperties.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
                foreach (var includeProperty in properties)
                {
                    query = query.Include(includeProperty);
                }
            }
            if (orderBy != null)
            {
                query = orderBy(query);
            }
            return query;
        }

        public bool Add(L entity)
        {
            DbSet<L> dbSet = DB.Set<L>();
            L add = dbSet.Add(entity);
            DB.SaveChanges();
            return true;

            //return DB.Set<L>().Add(entity);
        }

        public bool Update(L entity)
        {
            DbSet<L> dbSet = DB.Set<L>();
            DB.Entry(entity).State = EntityState.Modified;
            DB.SaveChanges();
            return true;

        }

        public bool Delete(L entity)
        {
            DbSet<L> dbSet = DB.Set<L>();
            dbSet.Remove(entity);
            DB.SaveChanges();
            return true;
        }

        public IQueryable<L> Get()
        {
            var query = DB.Set<L>().AsQueryable();
            return query;
        }

        public IQueryable<L> GetAll()
        {
            return DB.Set<L>().AsQueryable();
        }

        public L GetById(string id)
        {
            return DB.Set<L>().Find(id);
        }
    }
}
