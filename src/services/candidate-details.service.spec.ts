import { TestBed } from '@angular/core/testing';
import { candidate-tableService, NoteNames } from './candidate-table.service';

describe('candidate-tableService', () => {
  let service: candidate-tableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [candidate-tableService],
    });
    service = TestBed.inject(candidate-tableService);
  });

  it('should be created', () => {
    const service: candidate-tableService = TestBed.inject(candidate-tableService);
    expect(service).toBeTruthy();
  });

  it('should get candidate-tableDetails', () => {
    const expectedcandidate-tableDetails = {
      totalCash: 1500,
      accounts: [
        {
          id: '123456789',
          pin: '1234',
          balance: 800,
          overDraft: 200,
        },
        {
          id: '987654321',
          pin: '4321',
          balance: 1230,
          overDraft: 150,
        },
      ],
      Notes: [
        {
          name: NoteNames.FIFTY,
          amount: 10,
        },
        {
          name: NoteNames.TWENTY,
          amount: 30,
        },
        {
          name: NoteNames.TEN,
          amount: 30,
        },
        {
          name: NoteNames.FIVE,
          amount: 20,
        },
      ],
    };

    service.getcandidate-tableDetails().subscribe((candidate-tableDetails) => {
      expect(candidate-tableDetails).toEqual(expectedcandidate-tableDetails);
    });
  });

  it('should get accountDetails', () => {
    const service: candidate-tableService = TestBed.inject(candidate-tableService);
    const expectedAccountDetails = {
      id: '',
      pin: '',
      balance: 0,
      overDraft: 0,
    }
    service.getAccountDetails().subscribe((accountDetails) => {
      expect(accountDetails).toEqual(expectedAccountDetails);
    });

  });

});
