import { EventFormProps } from 'app/models/components/eventForm.model';

class EventMapper {
  toDomain(persistanceEvent: EventFormProps) {
    const { name, local, categoryId, state, city, date } = persistanceEvent;
    return {
      name,
      local,
      category_id: categoryId,
      state,
      city,
      date,
    };
  }
}

export default new EventMapper();
