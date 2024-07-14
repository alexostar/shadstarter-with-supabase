import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { PlacesTypes } from '@/types/collection';

type PropType = {
  places: PlacesTypes[];
};

const TableComponent: React.FC<PropType> = ({ places }) => {
  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Verkefni</CardTitle>
        <CardDescription>
          Staður, ár, vottun, endurskinsáhrif og áætluð binding.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Place</TableHead>
              <TableHead className='hidden sm:table-cell'>Year</TableHead>
              <TableHead className='hidden sm:table-cell'>Certified</TableHead>
              <TableHead className='hidden md:table-cell'>Albedo</TableHead>
              <TableHead className='text-right'>Amount CO2</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {places.map((place) => (
              <TableRow key={place.id}>
                <TableCell>
                  <div className='font-medium'>{place.name}</div>
                  <div className='hidden text-sm text-muted-foreground md:inline'>
                    {place.company}
                  </div>
                </TableCell>
                <TableCell className='hidden sm:table-cell'>
                  {place.year}
                </TableCell>
                <TableCell className='hidden sm:table-cell'>
                  <Badge className='text-xs' variant='secondary'>
                    {place.certified ? 'Certified' : 'Not Certified'}
                  </Badge>
                </TableCell>
                <TableCell className='hidden md:table-cell'>
                  {place.albedo_color}
                </TableCell>
                <TableCell className='text-right'>{place.capture}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TableComponent;
