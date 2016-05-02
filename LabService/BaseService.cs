using LabModel;
using LabRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabService
{
    public class BaseService<L> where L : Entity
    {
        public BaseRepository<L> baseRepo;

        public BaseService(BaseRepository<L> repo)
        {
            this.baseRepo = repo;
        }

        public virtual bool Add(L entity)
        {
            return baseRepo.Add(entity);
        }

        public virtual bool Update(L entity)
        {
            return baseRepo.Update(entity);
        }

        public bool Delete(L entity)
        {
            return baseRepo.Delete(entity);
        }

        public bool  Delete(string id)
        {
            var entity = baseRepo.Filter(x => x.ID == id).FirstOrDefault();
            bool deleted = baseRepo.Delete(entity);
            return deleted;
        }

        public L GetById(string id)
        {
            return baseRepo.GetById(id);
        }
    }
}
